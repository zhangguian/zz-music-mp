// index.ts

import { sayHello } from "../../api/hello"

Page({
  data: {
    message: 'helloWord'
   },
  hi() {
    sayHello().then((data: any) => {
      this.setData({
        message: data.message
      })
    })
  }
})
