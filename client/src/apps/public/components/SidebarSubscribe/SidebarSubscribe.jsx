import React from 'react'

import {Title} from "../../../../shared/components/UI/Title/Title";
import {Input} from "../../../../shared/components/Form/Input/Input";
import {Button} from "../../../../shared/components/UI/Button/Button";
import {Checkbox} from "../../../../shared/components/Form/Checkbox/Checkbox";
import SidebarBg from '../../../../assets/images/subscribe-bg.png'
import s from './SidebarSubscribe.module.sass'

export const SidebarSubscribe = () => {
  return (
    <div className={s.block}>
      <img className={s.img} src={SidebarBg} alt="Abstract figures" />
      <Title title="Sign up to updates" theme="light" className={s.title} />
      <p className={s.text}>Subscribe to Our newsletter</p>
      <form className={s.form}>
        <Input id="email" type="email" placeholder="Enter your email" className={s.input} />
        <Button size="xs" className={s.btn}>
          Subscribe
        </Button>
        <Checkbox id="confirm" name="confirm">
          By checking this box, you confirm that you have read and are agreeing to our terms of use regarding the
          storage of the data submitted through this form.
        </Checkbox>
      </form>
    </div>
  )
}
