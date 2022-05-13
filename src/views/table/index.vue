<template>
	<div class="app-container">
		<el-table
			v-loading="listLoading"
			:data="list"
			element-loading-text="Loading"
			border
			fit
			highlight-current-row
		>
			<el-table-column align="center" label="Index" width="95">
				<template #default="row">
					{{ row.$index + 1 }}
				</template>
			</el-table-column>
			<el-table-column label="Title">
				<template #default="{ row }">
					{{ row.title }}
				</template>
			</el-table-column>
			<el-table-column label="Author" width="110" align="center">
				<template #default="{ row }">
					<span>{{ row.author }}</span>
				</template>
			</el-table-column>
			<el-table-column label="Pageviews" width="110" align="center">
				<template #default="{ row }">
					{{ row.pageviews }}
				</template>
			</el-table-column>
			<el-table-column class-name="status-col" label="Status" width="110" align="center">
				<template #default="{ row }">
					<el-tag :type="row.status | statusFilter">{{ row.status }}</el-tag>
				</template>
			</el-table-column>
			<el-table-column align="center" prop="created_at" label="Display_time" width="200">
				<template #default="{ row }">
					<i class="el-icon-time"/>
					<span>{{ row.displayTime }}</span>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import { getList } from "@/api/table";

export default {
	filters: {
		statusFilter(status) {
			const statusMap = {
				published: "success",
				draft: "gray",
				deleted: "danger"
			};
			return statusMap[status];
		}
	},
	data() {
		return {
			list: null,
			listLoading: true
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			this.listLoading = true;
			getList().then(response => {
				this.list = response.data.items;
				this.listLoading = false;
			});
		}
	}
};
</script>
