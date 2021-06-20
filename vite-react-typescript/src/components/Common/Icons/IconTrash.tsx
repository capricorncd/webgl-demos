/**
 * Created by Capricorncd.
 * https://github.com/capricorncd
 * Date: 2021-06-19 21:36 (GMT+0900)
 */
import React from 'react'
import {AnyObject} from "@/types";
import {DEF_STYLES} from "@/assets/constants/Icons";
import {DefaultProps} from "@/types";

interface IconTrashProps extends DefaultProps {

}
export default function IconTrash(props: IconTrashProps) {
  const styles: AnyObject = {
    ...DEF_STYLES,
    ...props.styles,
  }
  return (
    <svg className={props.className}
         style={styles}
         onClick={props.onClick}
         viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6676">
      <path
        d="M312.860473 189.478077a45.465645 45.465645 0 0 0 45.465645-45.465645V96.614497A5.683206 5.683206 0 0 1 364.236652 90.931291h295.526696a5.683206 5.683206 0 0 1 5.683205 5.683206v47.397935a45.465645 45.465645 0 0 0 45.465646 45.465645 45.465645 45.465645 0 0 0 45.465645-45.465645V45.465645a45.465645 45.465645 0 0 0-45.465645-45.465645h-397.824398a45.465645 45.465645 0 0 0-45.465645 45.465645v98.546787a45.465645 45.465645 0 0 0 45.238317 45.465645zM867.427683 342.015318a44.101676 44.101676 0 0 0-42.510378 45.465645L762.06105 893.286269a45.465645 45.465645 0 0 1-44.669997 39.78244H306.608947a45.465645 45.465645 0 0 1-44.669997-39.78244l-62.742591-505.805306a44.101676 44.101676 0 0 0-42.510378-45.465645 44.101676 44.101676 0 0 0-42.396715 45.465645l55.695416 524.900877a125.030525 125.030525 0 0 0 123.325563 111.61816h437.37951a124.234876 124.234876 0 0 0 123.325563-111.61816L909.824398 387.480963a44.101676 44.101676 0 0 0-42.396715-45.465645zM893.115773 204.595405H130.884227A48.534577 48.534577 0 0 0 80.076368 250.06105a48.534577 48.534577 0 0 0 50.807859 45.465646h762.231546A48.534577 48.534577 0 0 0 943.923632 250.06105a48.534577 48.534577 0 0 0-50.807859-45.465645zM331.387723 402.825619a45.465645 45.465645 0 0 0-45.465645 45.465645v136.396937a45.465645 45.465645 0 0 0 90.931291 0v-136.396937a45.465645 45.465645 0 0 0-45.465646-45.465645zM738.077922 591.053391V454.656455a45.465645 45.465645 0 0 0-90.931291 0v136.396936a45.465645 45.465645 0 1 0 90.931291 0zM573.492285 737.111777c0 16.822289-26.370074 35.804196-61.492285 35.804196s-61.492285-18.754579-61.492285-35.576868a41.942058 41.942058 0 1 0-83.770452 0c0 66.948163 63.765568 119.460983 145.262737 119.460984s145.262737-52.512821 145.262737-119.460984a41.942058 41.942058 0 1 0-83.770452 0z"
        p-id="6677"></path>
    </svg>
  )
}
