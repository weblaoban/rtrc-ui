<template>
	<div class="bg-white">
		<div class="relative  flex items-center justify-center">
			<div @click="getMonth('prev')">
				<slot name="prev">上一月</slot>
			</div>
			<div class="mx-48px color-default text-18px font-600">{{
					currentMonthText
				}}
			</div>
			<div @click="getMonth('next')" v-if="canNext">
				<slot name="next">下一月</slot>
			</div>
			<div v-else>
				<slot name="nextWithStatus">下一月</slot>
			</div>
		</div>
		<div class="flex">
			<!--	多选行-->
			<div class="w-40px shrink-0  pt-60px box-border">
				<div v-if="multiply" :key="index" class="h-48px flex items-center justify-center" v-for="(item,index) in colTargetList"
				>
					<div class="color-hex-909399 text-18px rounded-full m-auto
							 h-24px" v-if="validateSelectedGroup(item)" @click="cancelSelect(item)">
						<div class="mt-2px w-20px h-20px m-auto rounded-4px color-white" :style="`background:${selectedBg}`">
							<svg style="fill:white" version="1.1" xmlns="http://www.w3.org/2000/svg"
									 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
									 enable-background="new 255 255 512 512" xml:space="preserve"><path d="M362.6,192.9L345,174.8c-0.7-0.8-1.8-1.2-2.8-1.2c0,0,0,0,0,0c-1.1,0-2.1,0.4-2.8,1.2l-122,122.9L173,253.3
	c-0.8-0.8-1.8-1.2-2.8-1.2c-1,0-2,0.4-2.8,1.2l-17.8,17.8c-1.6,1.6-1.6,4.1,0,5.7l56,56c3.6,3.6,8,5.7,11.7,5.7
	c5.3,0,9.9-3.9,11.6-5.5c0,0,0,0,0.1,0l133.7-134.4C364.1,196.9,364.1,194.4,362.6,192.9z"></path></svg>
						</div>
					</div>
					<div v-else @click="setSelect(item)">
						<div
								class="mt-2px w-20px h-20px m-auto box-border border-1px border-hex-ccc border-solid rounded-4px"></div>
					</div>
				</div>
			</div>
			<div style="width:calc(100% - 40px)">
				<div class="flex w-full">
					<div
							class="text-center"
							style="width: 14%"
							v-for="(item) in weekText"
							:key="item"
					>
						<div class="color-hex-909399 text-16px rounded-full m-auto h-24px">
							{{ item }}
						</div
						>
					</div>
				</div>
				<div class="h-6px"></div>
				<div class="flex">
					<div v-if="multiply"
							 class="text-center h-24px"
							 style="width: 14%"
							 v-for="(item,index) in rowTargetList"
							 :key="index"
							 @click="setSelect(item)"
					
					>
<!--						多选列-->
						<div class="color-hex-909399 text-18px rounded-full m-auto
								 h-24px" v-if="validateSelectedGroup(item)" @click="cancelSelect(item)">
							<div class="mt-2px w-20px h-20px m-auto rounded-4px color-white" :style="`background:${selectedBg}`">
								<svg style="fill:white" version="1.1" xmlns="http://www.w3.org/2000/svg"
										 xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
										 enable-background="new 255 255 512 512" xml:space="preserve"><path d="M362.6,192.9L345,174.8c-0.7-0.8-1.8-1.2-2.8-1.2c0,0,0,0,0,0c-1.1,0-2.1,0.4-2.8,1.2l-122,122.9L173,253.3
	c-0.8-0.8-1.8-1.2-2.8-1.2c-1,0-2,0.4-2.8,1.2l-17.8,17.8c-1.6,1.6-1.6,4.1,0,5.7l56,56c3.6,3.6,8,5.7,11.7,5.7
	c5.3,0,9.9-3.9,11.6-5.5c0,0,0,0,0.1,0l133.7-134.4C364.1,196.9,364.1,194.4,362.6,192.9z"></path></svg>
							</div>
						</div>
						<div v-else>
							<div
									class="mt-2px w-20px h-20px m-auto box-border border-1px border-hex-ccc border-solid rounded-4px"></div>
						</div>
					</div>
				</div>
				<div class="h-6px"></div>
				<div class="flex-wrap flex">
					<div
							class="text-16px text-center 	color-gray lh-48px"
							style="width: 14%"
							:key="'before' + item.date"
							@click="setCurDayAndPrevMonth(item)"
							v-for="item in emptyBefore"
					>
						<div
								v-if="validateSelected(item.dateText)"
								
								class="color-white relative"
						>
							<div
									class="absolute w-30px h-30px rounded-full top-0 bottom-0 left-0 right-0 m-auto opacity-50"
									:style="`background:${selectedBg}`"></div>
							<div class="relative z-1">{{ item.dateFormat }}</div>
						
						</div>
						<div v-else>{{ item.dateFormat }}</div>
					</div>
					
					<div class="text-center"
							 
							 style="width: 14%"
							 v-for="item in daysList"
							 :key="item.dateText"
					>
						<div @click="setCurDay(item)" class="lh-48px text-16px">
							<div
									v-if="validateSelected(item.dateText)"
									class="color-white relative"
							
							>
								<div
										class="absolute w-30px h-30px rounded-full top-0 bottom-0 left-0 right-0 m-auto"
										
										:style="`background:${selectedBg};opacity:${item.disabled?'0.5':'1'}`"></div>
								<div class="relative z-1">{{ item.dateFormat }}</div>
							
							</div>
							<div v-else-if="todayText === item.dateText" class="color-hex-796DF5">{{
									item.dateFormat
								}}
							</div>
							<div v-else-if="item.disabled" class="color-gray">{{
									item.dateFormat
								}}
							</div>
							<div v-else>{{ item.dateFormat }}</div>
						</div>
					</div>
					<div
							class="text-16px text-center color-gray lh-48px"
							v-for="item in emptyAfter"
							@click="setCurDayAndNextMonth(item)"
							:key="'after' + item.date"
							style="width: 14%"
					>
						<div
								v-if="validateSelected(item.dateText)"
								
								class="color-white
								relative"
						>
							<div
									class="absolute w-30px h-30px rounded-full top-0 bottom-0 left-0 right-0 m-auto opacity-50"
									:style="`background:${selectedBg}`"></div>
							<div class="relative z-1">{{ item.dateFormat }}</div>
						
						</div>
						<div v-else>{{ item.dateFormat }}</div>
					</div
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
defineOptions({
	name: 'RtrcSelectDate'
})
import dayjs from "dayjs";
import {ref, computed, onMounted, nextTick, watch} from 'vue'

const props = defineProps({
	modelValue: {
		default: "",
	},
	canNext: {
		type: Boolean,
		default: false,
	},
	multiply: {
		type: Boolean,
		default: false,
	},
	formatter: {
		type: String,
		default: ''
	},
	selectedBg: {
		type: String,
		default: '#456EC2'
	}
});
const emits = defineEmits(["onChange", '"update:modelValue"']);

const currentDay = ref(null);
const currentDayText = ref(null);
const currentMonthText = ref(dayjs().format("YYYY年MM月"));
const today = ref(dayjs());
const todayText = ref(dayjs().format("YYYY-MM-DD"));
const curMonth = ref(dayjs());
const daysList = ref([]);
const emptyBefore = ref([]);
const emptyAfter = ref([]);
const weekText = ref(["日", "一", "二", "三", "四", "五", "六"]);
const rowTargetList = ref();
const colTargetList = ref();

const canNext = computed(() => {
	return (
			today.value.format("YYYY年MM月") !== currentMonthText.value || props.canNext
	);
});
// 获取当月天数
const getThisMonthDays = function (year, month) {
	return new Date(year, month, 0).getDate();
}; //补全0
const zero = function (i) {
	return i >= 10 ? i : "0" + i;
};

//获取当月空出的天数
const createEmptyGrids = function (year, month) {
	let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
			empytGridsBefore = [],
			empytGridsAfter = [],
			emptyDays = week === 0 ? 7 : week;
	//当月天数
	const thisMonthDays = getThisMonthDays(year, month);
	//上月天数
	const preMonthDays =
			month - 1 < 0
					? getThisMonthDays(year - 1, 12)
					: getThisMonthDays(year, month - 1);
	
	//空出日期
	for (let i = 1; i <= emptyDays; i++) {
		const date = preMonthDays - (emptyDays - i);
		const dateFormat = zero(date);
		const prevMonth = month - 1 < 0 ? 12 : month - 1;
		const monthFormat = zero(prevMonth);
		const prevYear = month - 1 < 0 ? year - 1 : year;
		const dateText = `${prevYear}-${monthFormat}-${dateFormat}`;
		
		const week =
				weekText.value[
						new Date(Date.UTC(prevYear, prevMonth - 1, date)).getDay()
						];
		const result = {
			date,
			dateFormat,
			dateText,
			monthFormat,
			week,
			disabled: "prev",
		};
		empytGridsBefore.push(result);
	}
	
	var after =
			42 - thisMonthDays - emptyDays - 7 >= 0
					? 42 - thisMonthDays - emptyDays - 7
					: 42 - thisMonthDays - emptyDays;
	for (let i = 1; i <= after; i++) {
		const date = i;
		const dateFormat = zero(date);
		const nextMonth = month + 1 > 11 ? 1 : month + 1;
		const monthFormat = zero(nextMonth);
		const nextYear = month + 1 > 11 ? year + 1 : year;
		const dateText = `${nextYear}-${monthFormat}-${dateFormat}`;
		
		const week =
				weekText.value[
						new Date(Date.UTC(nextYear, nextMonth - 1, date)).getDay()
						];
		const result = {
			date,
			dateFormat,
			dateText,
			monthFormat,
			week,
			disabled: "prev",
		};
		empytGridsAfter.push(result);
	}
	emptyBefore.value = empytGridsBefore;
	emptyAfter.value = empytGridsAfter;
};

// 绘制当月天数占的格子
const createDays = function (year, month) {
	let thisMonthDays = [],
			days = getThisMonthDays(year, month);
	for (let i = 1; i <= days; i++) {
		const day = year + "-" + zero(month) + "-" + zero(i);
		let disabled = dayjs().unix() < dayjs(day + " 00:00:00").unix();
		thisMonthDays.push({
			disabled,
			date: i,
			dateFormat: zero(i),
			monthFormat: zero(month),
			week: weekText.value[new Date(Date.UTC(year, month - 1, i)).getDay()],
			dateText: day,
		});
	}
	
	daysList.value = thisMonthDays;
};

const totalList = ref([]);
const getTotalList = () => {
	const list = [];
	emptyBefore.value.forEach((item) => {
		list.push(JSON.parse(JSON.stringify(item)));
	});
	daysList.value.forEach((item) => {
		list.push(JSON.parse(JSON.stringify(item)));
	});
	emptyAfter.value.forEach((item) => {
		list.push(JSON.parse(JSON.stringify(item)));
	});
	let colNum = 7;
	// 一行有7个 根据总数 算出列数
	list.forEach(((item, index) => {
		item.rowIndex = Math.floor(index % colNum)
		item.colIndex = Math.floor(index / colNum)
	}))
	// 根据行和列分组 获取每一行每一列的数据 为之后的点击事件做准备
	rowTargetList.value = groupArrayByKey(list, 'rowIndex', 'dateText')
	colTargetList.value = groupArrayByKey(list, 'colIndex', 'dateText')
	totalList.value = list
}
const groupArrayByKey = (source, key, resultKey) => {
	source = JSON.parse(JSON.stringify(source))
	const result = {};
	source.forEach((item) => {
		if (!result[item[key]]) {
			result[item[key]] = [];
		}
		result[item[key]].push(item[resultKey]);
	});
	return result;
}
const setSelect = (options) => {
	const arr = [...options, ...currentDayText.value]
	const uniqueArr = Array.from(new Set(arr));
	console.log(uniqueArr)
	setCurDay(uniqueArr, true)
}
const cancelSelect = (options) => {
	let set2 = new Set(options);
	let result = currentDayText.value.filter(item => !set2.has(item));
	console.log(result); // 输出: [1, 2, 4]
	setCurDay(result, true)
}
const validateSelectedGroup = (options) => {
	return options.every(item => currentDayText.value.includes(item))
}
const init = () => {
	const year = today.value.year();
	const month = today.value.month() + 1;
	createDays(year, month);
	createEmptyGrids(year, month);
	getTotalList()
};

onMounted(() => {
	if (props.modelValue) {
		setCurDay(props.modelValue, true)
	}
	nextTick(() => {
		init();
	});
});

const getMonth = (type = "prev") => {
	let nextDay, nextDayText;
	if (type === "prev") {
		nextDay = curMonth.value.subtract(1, "month");
		nextDayText = nextDay.format("YYYY年MM月");
	} else if (type === "next") {
		nextDay = curMonth.value.add(1, "month");
		nextDayText = nextDay.format("YYYY年MM月");
	}
	curMonth.value = nextDay;
	currentMonthText.value = nextDayText;
	const year = nextDay.year();
	const month = nextDay.month() + 1;
	nextTick(() => {
		createDays(year, month);
		createEmptyGrids(year, month);
		getTotalList()
	});
};
const setCurDayAndPrevMonth = (item) => {
	if (!props.multiply) {
		getMonth("prev");
	}
	setCurDay(item);
};
const setCurDayAndNextMonth = (item) => {
	if (!props.multiply) {
		getMonth("next");
	}
	setCurDay(item);
};
const setCurDay = (option, init = false) => {
	if (init) {
		let date = dayjs(option)
		let dateText = date.format("YYYY-MM-DD");
		if (props.multiply) {
			date = option.map((item => dayjs(item)));
			dateText = date.map(item => item.format("YYYY-MM-DD"));
		}
		currentDay.value = date;
		currentDayText.value = dateText
	} else {
		if (props.multiply) {
			const target = option.dateText
			const hasIndex = currentDayText.value?.indexOf(option.dateText) > -1
			if (hasIndex) {
				currentDayText.value = currentDayText.value.filter(item => item !== option.dateText)
				currentDay.value = currentDay.value.filter(item => item.format("YYYY-MM-DD") !== option.dateText)
			} else {
				currentDayText.value = currentDayText.value ? [...currentDayText.value, target] : [target]
				currentDay.value = currentDay.value ? [...currentDay.value, dayjs(option.dateText)] : [dayjs(option.dateText)]
			}
		} else {
			
			let date = dayjs(option.dateText)
			let dateText = date.format("YYYY-MM-DD");
			currentDay.value = date;
			currentDayText.value = dateText
		}
	}
	
}

const backToady = () => {
	currentMonthText.value = today.value.format("YYYY年MM月");
	curMonth.value = today.value;
	nextTick(() => {
		init();
	});
};

const validateSelected = (dateText) => {
	if (props.multiply) {
		return currentDayText.value?.indexOf(dateText) > -1
	} else {
		return currentDayText.value === dateText;
	}
};

watch(currentDay, (newValue) => {
	if (props.formatter) {
		if (props.multiply) {
			newValue = newValue.map(item => dayjs(item).format(props.formatter));
		}else{
			newValue = dayjs(newValue).format(props.formatter);
		}
	}
	emits("onChange", "date", newValue);
	console.log(newValue)
	emits("update:modelValue", newValue);
});
</script>
<style>
.bg-white {
	background-color: #fff;
}

.relative {
	position: relative
}

.flex {
	display: flex
}

.flex-wrap {
	flex-wrap: wrap;
}

.items-center {
	align-items: center
}

.justify-center {
	justify-content: center
}

.mx-48px {
	margin-left: 48px;
	margin-right: 48px;
}

.color-default {
	color: #2a2a2a
}

.font-600 {
	font-weight: 600
}

.w-40px {
	width: 40px
}

.shrink-0 {
	flex-shrink: 0
}

.pt-60px {
	padding-top: 60px;
}

.box-border {
	box-sizing: border-box;
}

.h-48px {
	height: 48px
}

.color-hex-909399 {
	color: #909399;
}

.text-18px {
	font-size: 18px;
}

.text-16px {
	font-size: 16px;
}

.rounded-full {
	border-radius: 9999px;
}

.m-auto {
	margin: auto
}

.h-24px {
	height: 24px
}


.mt-2px {
	margin-top: 2px;
}

.w-20px {
	width: 20px;
}

.h-20px {
	height: 20px;
}

.rounded-4px {
	border-radius: 4px;
}

.color-white {
	color: white;
}

.border-1px {
	border-width: 1px;
}

.border-hex-ccc {
	border-color: #ccc
}

.border-solid {
	border-style: solid;
}

.w-full {
	width: 100%;
}

.text-center {
	text-align: center;
}

.h-6px {
	height: 6px;
}

.absolute {
	position: absolute;
}
.top-0{
	top:0;
}
.bottom-0{
	bottom:0;
}
.left-0{
	left:0;
}
.right-0{
	right:0;
}

.w-30px {
	width: 30px;
}

.h-30px {
	height: 30px;
}

.opacity-50 {
	opacity: 0.5;
}

.z-1 {
	z-index: 1;
}

.color-hex-796DF5 {
	color: #796DF5;
}

.color-gray {
	color: gray;
}
.lh-48px{
	line-height: 48px;
}
</style>
