import React, { Component } from 'react';
const Content = {
  '#profile': <div >Profile (<a href="#">home</a>)</div>,
  '#accounts': <div >Accounts (<a href="#">home</a>)</div>,
  '*': <div>Dashboard<br/>
    <a href="#profile">Profile</a>
    <br/>
    <a href="#accounts">Accounts</a>
    </div>
}
export default Content;