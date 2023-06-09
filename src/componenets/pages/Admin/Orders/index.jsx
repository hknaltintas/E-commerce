import React from "react";
import { fetchOrders } from "../../../api";
import { useQuery } from "react-query";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Text,
} from "@chakra-ui/react";

function Orders() {
  const { isLoading, isError, data, error } = useQuery(
    "admin:orders",
    fetchOrders
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error.message}</div>;
  }

  

  return (
    <div fontSize="2xl" p={5}>
      <Text>Orders</Text>
      <Table variant="simple">
        <TableCaption>Orders List</TableCaption>
        <Thead>
          <Tr>
            <Th>User</Th>
            <Th>Address</Th>
            <Th>Items</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((item)=>(<Tr key={item._id}>
            <Td>{item.user.email}</Td>
            <Td>{item.adress}</Td>
            <Td>{item.items.length}</Td>
          </Tr>))}
        </Tbody>
      </Table>
    </div>
  );
}

export default Orders;
