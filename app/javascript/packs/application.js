// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

footer {
  position: absolute; /* 絶対位置を指定 起点はページ全体 */
  bottom: 0; /* ページの最下部に配置 */
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  background-color: #fff;
  border-top: 1px solid #949799;
}