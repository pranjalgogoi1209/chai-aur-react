import React, { useId } from 'react'

function InputBox({
  label,
  amount, 
  onAmountChange, 
  amountDisable = false, 
  currencyOptions = [], 
  selectCurrency, 
  onCurrencyChange}) {

  const amountInputId = useId()

  return (
    <div className={'bg-white -3 rounded-lg text-sm flex'}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/40 mb-2 inline-block'>{label}</label>
        <input id={amountInputId} type="number" placeholder='Amount' disable={amountDisable} value={amount} onChange={e => onAmountChange && onAmountChange(e.target.value)} className='outline-none w-full bg-transparent py-1.5'/>
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/40 mb-2 2-full'>Currency Type</p>
        <select value={selectCurrency} onChange={e => onCurrencyChange && onCurrencyChange(e.target.value)} className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'>
          {currencyOptions.map(currency => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox