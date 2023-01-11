import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';

const data = [
    {
      key: '1',
      fName: 'John ',
      lName:'Brown',
      age: 32,
      email:'email123@gmail.com',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      fName: 'Joe ',
      lName:'Black',
      email:'email345@gmail.com',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      fName: 'Jim ',
      lName:'Green',
      email:'email638@gmail.com',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      fName: 'Menna ',
      lName:'Green',
      email:'email098@gmail.com',
      age: 23,
      address: 'London No. 2 Lake Park',
    },
    {
        key: '4',
        fName: 'Eman ',
        lName:'bseff',
        email:'emaildefea@gmail.com',
        age: 45,
        address: 'London No. 2 Lake Park',
      },
  ];
  

const NewTable = () => {
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
        ////Search and filter
        <div
          style={{
            padding: 8,
          }}
          onKeyDown={(e) => e.stopPropagation()}
        >
          <Input
            ref={searchInput}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{
              marginBottom: 8,
              display: 'block',
            }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{
                width: 90,
              }}
            >
              Search
            </Button>
            <Button
              onClick={() => clearFilters && handleReset(clearFilters)}
              size="small"
              style={{
                width: 90,
              }}
            >
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({
                  closeDropdown: false,
                });
                setSearchText(selectedKeys[0]);
                setSearchedColumn(dataIndex);
              }}
            >
              Filter
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                close();
              }}
            >
              close
            </Button>
          </Space>
        </div>
      ),
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1890ff' : undefined,
          }}
        />
      ),
      onFilter: (value, record) =>
        record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
      onFilterDropdownOpenChange: (visible) => {
        if (visible) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
      render: (text) =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{
              backgroundColor: '#ffc069',
              padding: 0,
            }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
    const columns = [
      {
        title: 'First Name',
        dataIndex: 'fName',
        key: 'fName',
        width: '15%',
        ...getColumnSearchProps('fName'),
      },
      {
        title: 'Last Name',
        dataIndex: 'lName',
        key: 'lName',
        width: '15%',
        ...getColumnSearchProps('lName'),
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        width: '10%',
        ...getColumnSearchProps('age'),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: '25%',
        ...getColumnSearchProps('email'),
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        
        ...getColumnSearchProps('address'),
        sorter: (a, b) => a.address.length - b.address.length,
        sortDirections: ['descend', 'ascend'],
      },
    ];
    return <Table className="container table" columns={columns} dataSource={data} />;
} 
export default NewTable;