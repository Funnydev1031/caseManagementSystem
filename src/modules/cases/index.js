import { DownOutlined, EllipsisOutlined } from "@ant-design/icons";
import {
	Button,
	Checkbox,
	Dropdown,
	Flex,
	Input,
	Popover,
	Space,
	Tag,
	message,
	Spin,
} from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import AppTable from "../../components/table";
import useFetch from "../../hooks/useFetch";
import { batchActionOptions } from "../../utils/constants";
import { encodeQueryData } from "../../utils/queryString";

const { Search } = Input;

export const Cases = () => {
	const columns = useMemo(() => {
		return [
			{
				title: "Priority",
				dataIndex: "priority",
				render: (tag) => {
					const tagColor = tag === "High" ? "#AE001F" : "#1B4ED1";

					return <Tag color={tagColor}>{tag.toUpperCase()}</Tag>;
				},
				fixed: "left",
			},
			{
				title: "Case name",
				dataIndex: "caseName",
				fixed: "left",
			},
			{
				title: "Assignee",
				dataIndex: "assignee",
				fixed: "left",
			},
			{
				title: "description",
				dataIndex: "description",
			},
			{
				title: "status",
				dataIndex: "status",
				render: (tag) => {
					const tagColor = {
						Accepted: "success",
						Rejected: "error",
						"In Progress": "processing",
					};

					return <Tag color={tagColor[tag]}>{tag.toUpperCase()}</Tag>;
				},
			},
			{
				title: "Type",
				dataIndex: "type",
				render: (tag) => {
					return <Tag>{tag.toUpperCase()}</Tag>;
				},
			},
			{
				title: "Date created",
				dataIndex: "dateCreated",
			},
			{
				title: "Last updated",
				dataIndex: "lastUpdated",
			},
			{
				title: "Action",
				dataIndex: "Action",
				render: (text, record) => {
					const rowActionMenuProps = {
						items: [
							{
								label: "Accept cases",
								key: "1-" + record.caseName,
							},
							{
								label: "Reject cases",
								key: "2-" + record.caseName,
							},
						],
						onClick: handleRowMenuClick,
					};
					return (
						<Dropdown menu={rowActionMenuProps}>
							<EllipsisOutlined />
						</Dropdown>
					);
				},
			},
		];
	}, []);
	const { status } = useParams();

	const [searchValue, setSearchValue] = useState("");
	const [selectedRows, setSelectedRows] = useState([]);
	const [page, setPage] = useState(1);
	const [selectedColumns, setSelectedColumns] = useState(
		columns?.map((column) => column?.title),
	);

	const [data, fetchData] = useFetch();
	const [changeStatusData, changeStatus] = useFetch();

	const handleBatchMenuClick = async (e) => {
		const [key, caseName] = e.key.split("-");
		try {
			await changeStatus({
				url: "/update-status",
				method: "put",
				data: {
					ids: selectedRows?.map((d) => d.caseName),
					status: key === "1" ? "Accepted" : "Rejected",
				},
			});
			message.success(`Item ${key === "1" ? "Accepted" : "Rejected"}`);
			fetchRows();
		} catch (e) {
			message.error(`Failed To Update`);
		}
	};

	const handleRowMenuClick = async (e) => {
		const [key, caseName] = e.key.split("-");
		try {
			await changeStatus({
				url: "/update-status",
				method: "put",
				data: {
					ids: [caseName],
					status: key === "1" ? "Accepted" : "Rejected",
				},
			});
			message.success(`Item ${key === "1" ? "Accepted" : "Rejected"}`);
			fetchRows();
		} catch (e) {
			message.error(`Failed To Update`);
		}
	};

	const batchActionMenuProps = {
		items: batchActionOptions,
		onClick: handleBatchMenuClick,
	};

	const fetchRows = () => {
		const url = encodeQueryData({
			search: searchValue,
			sort: "caseName",
			order: "asc",
			page,
			limit: 50,
			status: status,
		});

		fetchData({
			url: "/requests?" + url,
			method: "get",
		});
	};
	useEffect(() => {
		fetchRows();
	}, [searchValue, page, status]);

	return (
		<Spin tip="Loading" spinning={data?.loading || changeStatusData?.loading}>
			<Flex gap="middle" vertical>
				<Flex justify="space-between">
					<Search
						placeholder="Search..."
						allowClear
						enterButton="Search"
						onSearch={setSearchValue}
						style={{
							maxWidth: 320,
						}}
					/>
					<Flex gap={8}>
						<Dropdown menu={batchActionMenuProps}>
							<Button>
								<Space>
									Batch action
									<DownOutlined />
								</Space>
							</Button>
						</Dropdown>
						<Popover
							content={
								<Checkbox.Group
									style={{ flexDirection: "column" }}
									options={columns?.map((column) => ({
										label: column?.title,
										value: column?.title,
									}))}
									onChange={(checkedValues) => {
										setSelectedColumns(checkedValues);
									}}
									defaultValue={columns?.map((column) => column?.title)}
								/>
							}
							trigger="click"
						>
							<Button type="primary">Columns</Button>
						</Popover>
					</Flex>
				</Flex>
				<AppTable
					columns={columns}
					data={data?.data?.data ?? []}
					pagination={{
						current: data?.data?.page,
						total: data?.data?.total,
						pageSize: data?.data?.limit,
					}}
					onPageChange={setPage}
					setSelectedRows={setSelectedRows}
					selectedColumns={selectedColumns}
				/>
			</Flex>
		</Spin>
	);
};
