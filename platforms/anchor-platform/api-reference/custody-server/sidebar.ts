import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "anchor-platform/api-reference/custody-server/custody-server-api",
    },
    {
      type: "category",
      label: "Custody Transactions",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/create-custody-transaction",
          label: "Create Custody Transaction",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-payment",
          label: "Send Payment",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Refunds",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-refund",
          label: "Send Refund",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Unique Address",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/generate-unique-address",
          label: "Generate Unique Address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SEP-6",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/create-custody-transaction",
          label: "Create Custody Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-payment",
          label: "Send Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-refund",
          label: "Send Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/generate-unique-address",
          label: "Generate Unique Address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SEP-24",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/create-custody-transaction",
          label: "Create Custody Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-payment",
          label: "Send Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-refund",
          label: "Send Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/generate-unique-address",
          label: "Generate Unique Address",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "SEP-31",
      items: [
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/create-custody-transaction",
          label: "Create Custody Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-payment",
          label: "Send Payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/send-refund",
          label: "Send Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "anchor-platform/api-reference/custody-server/generate-unique-address",
          label: "Generate Unique Address",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
