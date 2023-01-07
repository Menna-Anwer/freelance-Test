import React from "react";
import { Form, Input, Select ,Button } from "antd";

const Registration = () => {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <div className="container">
      <div className="form-container">
        <Form className="form">
          <h2>تسجيل طلب جديد (تراخيص)</h2>

          <Form.Item
            className="form-Item"
            label="التاريخ"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="form-input" placeholder="التاريخ" />
          </Form.Item>
          {/* ///////////////////////الاسم//////////////////////////// */}
          <Form.Item
            className="form-Item"
            label="الاسم"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="form-input" placeholder="الاسم" />
          </Form.Item>
          {/* ////////////////////////الرقم القومي//////////////////////////////// */}
          <Form.Item
            className="form-Item"
            label="الرقم القومي"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="form-input"  style={{width:"74%"}} placeholder="الرقم القومي" />
          </Form.Item>
          {/* //////////////////رقم المعاملة////////////////// */}
          <Form.Item
            className="form-Item"
            label="رقم المعاملة"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="form-input"  style={{width:"74%"}}  placeholder="رقم المعاملة" />
          </Form.Item>
          {/* ...............رقم الموبيل................. */}
          <Form.Item
            className="form-Item"
            label="رقم الموبيل"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input className="form-input"  style={{width:"73%"}}  placeholder="رقم الموبيل" />
          </Form.Item>
          {/* //////////////////////////////////////////// */}
          <Form.Item
            className="form-Item"
            label="نوع الإجراء"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select value="rmb"  style={{width:"72%"}}  className="form-select">
              <Option value="rmb">نوع الإجراء</Option>
              <Option value="dollar">Dollar</Option>
            </Select>
          </Form.Item>
          {/* //////////////////////////////////// */}
          <div className="notes-container">
            <div className="select-container">
              <div style={{ width: "45%" }}>
                <Form.Item
                  className="form-Item"
                  label="المركز"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <p
                    style={{
                      color: "RGB(3,133,166)",
                      float: "left",
                      fontSize: "20px",
                    }}
                  >
                    كفر الشيخ
                  </p>
                </Form.Item>
              </div>
              <div style={{ width: "40%" }}>
                <Form.Item
                  className="form-Item"
                  label=" الوحدة المحلية"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <Select
                    value="rmb"
                    className="form-select"
                    style={{ width: "100%" }}
                  >
                    <Option value="rmb">نوع الإجراء</Option>
                    <Option value="dollar">Dollar</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////// */}
            <div className="select-container">
              <div style={{ width: "55%" }}>
                <Form.Item
                  className="form-Item"
                  label="الشياخة"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                 <Input className="form-input" style={{width:"40%"}} placeholder="الرقم القومي" />
                </Form.Item>
              </div>
              {/* ///////////////////////////////// */}
              <div style={{ width: "40%" }}>
                <Form.Item
                  className="form-Item"
                  label="  العزبة"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                 < Input className="form-input" placeholder="الرقم القومي" />
                </Form.Item>
              </div>
            </div>
            <Form.Item
                  className="form-Item"
                  label="ملاحظات"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username!",
                    },
                  ]}
                >
                  <TextArea rows={4} style={{width:"70%",float:"left",margin:"0 20px 20px 20px"}}/>
                </Form.Item>
          </div>
          <Button className="btn">تسجيل </Button>
        </Form>
      </div>
    </div>
  );
};

export default Registration;
