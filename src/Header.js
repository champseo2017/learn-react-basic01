import React, { Component } from "react";
class Header extends Component {
  componentWillMount() {
    console.log("Header: willMount start 1");
  }
  componentDidMount() {
    console.log("Header: didMount start 3");
  }
  /* 
  (ex จากนั้นลองคลิกปุ่ม "คลิกบวก Like" ดู เมื่อตัวเลขเปลียน (state เปลียนทำให้ component ถูก render ให้อันตโนมัติ ส่งผลให้ component App render ใหม่ และ Header ถูก render ตามไปด้วย ทั้งที่ความจริงเราไม่ต้องการให้ render Header ใหม่เลย มันจะเปลือง performance ))
    method นี้ใช้สำหรับควบคุมการ render หลักๆ ก็เพื่อ performance (shouldComponentUpdate() ห้ามสั่ง set state เพราะมันมีการเช็ค nextState)
  */
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    /*  
      componentWillReceiveProps(nextProps)
        method นี้จะทำงานเมื่อ component ได้รับ props เข้ามาใหม่ก่อนที่ component นั้นจะทำการ re-render (ครั้งแรกที่ render เสร็จจะยังไม่ทำงาน)
    */
    console.log(
      "render nextProps",
      nextProps.like,
      "re render current porps",
      this.props.like
    );
  }

  render() {
    console.log("Header: render start 2");
    return <div>{this.props.title}</div>;
  }
}
export default Header;

/* 
จากหน้าต่าง Console จะรู้เลยว่า React จะเริ่มทำงานที่ method componentWillMount() แล้วพอมันเจอ component ไหน (ในโค้ดคือ Header) มันก็จะเข้าไปทำงานใน component ก่อน

*/
