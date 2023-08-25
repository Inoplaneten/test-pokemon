import { useState, useCallback, type ChangeEvent, type MouseEvent } from 'react'

export type TOnChange = ChangeEvent<HTMLInputElement>
export type TOnClick = MouseEvent<HTMLButtonElement>

export interface IUseForm {
  form: Record<string, {
    name: string
    value: string
    selected?: string
  }>
  onChange: (event: TOnChange) => void
  onSelected: (event: TOnClick) => void
}

export const useForm = (
  formObj: IUseForm['form']): IUseForm => {
  const [form, setForm] = useState(formObj)

  const handleChange = (event: TOnChange): void => {
    const { name, value } = event.target

    const inputObj = { ...form[name] }

    inputObj.value = value

    setForm({ ...form, [name]: inputObj })
  }

  const handleSelected = (event: TOnClick): void => {
    const { name, value, dataset } = event.currentTarget

    const inputObj = { ...form[name] }

    if (inputObj?.selected !== undefined) {
      inputObj.value = value
      inputObj.selected = dataset.name

      setForm({ ...form, [name]: inputObj })
    }
  }

  const onChange = useCallback((event: TOnChange): void => {
    handleChange(event)
  }, [form])

  const onSelected = useCallback((event: TOnClick): void => {
    handleSelected(event)
  }, [form])

  return {
    form,
    onChange,
    onSelected
  }
}
