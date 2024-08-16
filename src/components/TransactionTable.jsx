import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div style={{ height: "100%", overflowY: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", height: "100%" }}>
        <thead>
          <tr
            style={{
              backgroundColor: "grey",
              color: "white",
              textAlign: "center",
              borderCollapse: "separate",
              borderSpacing: "0",
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Category</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Sold</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Date of Sale</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length !== 0 && transactions.map((row,index) => (
            <tr key={index}>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.productId}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.title}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.description}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.price}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.category}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.sold ? "✓" : "✗"}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                {row.dateOfSale}
              </td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <img src={row.image} alt="Transaction" style={{ width: "50px" }} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
