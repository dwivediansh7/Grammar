import React from 'react'
import styles from './textcustombar.module.scss'
import { handleToggleBold, handleToggleItalic,handleToggleUnderline,handleToggleHeader,handleAddLink,handleInsertBulletPoints,handleTextColorChange} from './TextFunctions'
import { HandleCheckTone } from '@/app/helpers/CheckTone';

interface TextCustomBarProps{
  textRef: any
  onToneChange?: (tone: string) => void;
}

const TextCustomBar:React.FC<TextCustomBarProps> = ({textRef, onToneChange}) => {

  return (
    <div className={styles.text_custom__container}>
        <div className={styles.text_custom__container__icons}>
          <button className={styles.text_custom__container__button} onClick={()=>handleToggleBold(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 64C0 46.3 14.3 32 32 32H80 96 224c70.7 0 128 57.3 128 128c0 31.3-11.3 60.1-30 82.3c37.1 22.4 62 63.1 62 109.7c0 70.7-57.3 128-128 128H96 80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V256 96H32C14.3 96 0 81.7 0 64zM224 224c35.3 0 64-28.7 64-64s-28.7-64-64-64H112V224H224zM112 288V416H256c35.3 0 64-28.7 64-64s-28.7-64-64-64H224 112z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleToggleItalic(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M128 64c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32s-14.3 32-32 32H293.3L160 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H90.7L224 96H160c-17.7 0-32-14.3-32-32z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleToggleUnderline(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M16 64c0-17.7 14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H128V224c0 53 43 96 96 96s96-43 96-96V96H304c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H384V224c0 88.4-71.6 160-160 160s-160-71.6-160-160V96H48C30.3 96 16 81.7 16 64zM0 448c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleToggleHeader(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleAddLink(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleInsertBulletPoints(textRef)}><svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleTextColorChange(textRef,'red')}><svg style={{fill:'red'}} className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleTextColorChange(textRef,'blue')}><svg style={{fill:'blue'}} className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleTextColorChange(textRef,'green')}><svg style={{fill:'green'}} className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg></button>
          <button className={styles.text_custom__container__button} onClick={()=>handleTextColorChange(textRef,'black')}><svg style={{fill:'black'}} className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg></button>
          <div className={styles.text_custom__container__tone_buttons}>
            <button 
              className={styles.text_custom__container__button} 
              onClick={() => onToneChange?.('professional')}
              title="Change to Professional Tone"
            >
              <svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l255.5-255.5L278.5 215.6zm230.6-230.6C530.4 4.3 554.7 0 579.8 0c48.5 0 88.2 39.7 88.2 88.2 0 25.1-4.3 49.4-14.9 70.6C634.8 198.6 580.5 235.7 544 256c-35.8-20.3-90.1-57.4-108.5-97.2-10.6-21.2-14.9-45.5-14.9-70.6C420.6 39.7 460.3 0 508.8 0c25.1 0 49.4 4.3 70.6 14.9 8.6 4.3 16.6 9.4 23.8 15.1 7.2-5.7 15.2-10.8 23.8-15.1z"/>
              </svg>
              <span>Professional</span>
            </button>
            <button 
              className={styles.text_custom__container__button} 
              onClick={() => onToneChange?.('casual')}
              title="Change to Casual Tone"
            >
              <svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l255.5-255.5L278.5 215.6zm230.6-230.6C530.4 4.3 554.7 0 579.8 0c48.5 0 88.2 39.7 88.2 88.2 0 25.1-4.3 49.4-14.9 70.6C634.8 198.6 580.5 235.7 544 256c-35.8-20.3-90.1-57.4-108.5-97.2-10.6-21.2-14.9-45.5-14.9-70.6C420.6 39.7 460.3 0 508.8 0c25.1 0 49.4 4.3 70.6 14.9 8.6 4.3 16.6 9.4 23.8 15.1 7.2-5.7 15.2-10.8 23.8-15.1z"/>
              </svg>
              <span>Casual</span>
            </button>
            <button 
              className={styles.text_custom__container__button} 
              onClick={() => onToneChange?.('friendly')}
              title="Change to Friendly Tone"
            >
              <svg className={styles.text_custom__container__icon} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path d="M278.5 215.6L23 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l255.5-255.5L278.5 215.6zm230.6-230.6C530.4 4.3 554.7 0 579.8 0c48.5 0 88.2 39.7 88.2 88.2 0 25.1-4.3 49.4-14.9 70.6C634.8 198.6 580.5 235.7 544 256c-35.8-20.3-90.1-57.4-108.5-97.2-10.6-21.2-14.9-45.5-14.9-70.6C420.6 39.7 460.3 0 508.8 0c25.1 0 49.4 4.3 70.6 14.9 8.6 4.3 16.6 9.4 23.8 15.1 7.2-5.7 15.2-10.8 23.8-15.1z"/>
              </svg>
              <span>Friendly</span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default TextCustomBar