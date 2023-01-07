import React from "react";
import { Layout, Checkbox, Button, Row, Col } from "antd";
const Header = () => {
  const { Header } = Layout;
  return (
    <div className="all-container">
      <Header className="header container">
        <h1>تسجيل الخدمات</h1>
        <Row className="row">
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p> تنفيذ ازالة </p>
                <p>
                  <i class="fa-solid fa-person-digging"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>

                  توصيل مرافق <i class="fa-solid fa-person-digging"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>تصالح </p>
                <p>
                  <i class="fa-solid fa-file-circle-check"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>تراخيص </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>الأعمال المساحية </p>
                <p>
                  <i class="fa-solid fa-map-location-dot"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>محطة تقوية تليقونات </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>اشغال وتجديد </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>رخص استئناف اعمال </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>رخصة الاكشاك</p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>اعادة دراسة </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
          <Col className="col-container" xs={12} sm={11} md={8} lg={6} xl={5}>
            <Button className="btn-container">
              <Checkbox className="check-container">
                <p>بدل فاقد </p>
                <p>
                  <i class="fa-sharp fa-solid fa-city"></i>
                </p>
              </Checkbox>
            </Button>
          </Col>
        </Row>
      </Header>
    </div>
  );
};

export default Header;
