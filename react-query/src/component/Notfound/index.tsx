import { DefaultLayout } from "@component/Layout/Default";
import { Result } from "antd";

export const Notfound = () => {
  return (
    <DefaultLayout>
      <Result status="404" title="404" subTitle={"Không tìm thấy"} />
    </DefaultLayout>
  );
};
