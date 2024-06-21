import { Flex, Pagination, Table } from "antd";
import React from "react";

const AppTable = ({
	columns = [],
	data = [],
	checkedList = [],
	setSelectedRows,
	onPageChange,
	selectedColumns,
	pagination = {
		current: 1,
		total: 1,
		pageSize: 10,
	},
}) => {
	const rowSelection = {
		onChange: (selectedRowKeys, selectedRows) => {
			setSelectedRows(selectedRows);
		},
		onSelect: (record, selected, selectedRows) => {
			setSelectedRows(selectedRows);
		},
		onSelectAll: (selected, selectedRows, changeRows) => {
			setSelectedRows(selectedRows);
		},
	};

	const newColumns = columns.map((item) => ({
		...item,
		hidden: !selectedColumns.includes(item.title),
	}));

	return (
		<>
			<Table
				columns={newColumns}
				dataSource={data.map((d, index) => ({ ...d, key: index }))}
				rowSelection={{
					...rowSelection,
					checkStrictly: true,
				}}
				pagination={false}
			/>
			<Flex align="center" justify="space-between" style={{ marginTop: 24 }}>
				<span>
					{pagination?.current} - {pagination?.total} of{" "}
					{pagination?.total * pagination?.pageSize} cases
				</span>
				<Pagination
					simple
					defaultCurrent={1}
					{...pagination}
					showSizeChanger={false}
					onChange={(page) => onPageChange(page)}
				/>
			</Flex>
		</>
	);
};
export default AppTable;
