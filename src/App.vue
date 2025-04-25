<template>
	<div>
		{{selected}}
		<rtrc-select-date v-model="selected" formatter="YYYY-MM-DD"></rtrc-select-date>
	</div>
</template>
<script setup lang="ts">
import {ref} from "vue";
// @ts-ignore
import RtrcSelectDate from "../components/components/SelectDate/index.vue";
const selected = ref('')
</script>
