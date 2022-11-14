import React from 'react';
import ava from '../img/ava.jpg'
import MyWork from "./components/MyWork";

import s from './MyWorks.module.css';
import line from "../img/line.png";

const MyWorks = () => {
    return (
        <div className={s.myWorksPage}>
         <div>  <img className={s.skillPageImgLine} src={line}/>
            <h3 className={s.myWorkPageName}>My Works</h3></div>
    <div className={s.myWorkItems}>
                <MyWork title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>
        <MyWork title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>
        <MyWork title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>
        <MyWork title={'Social network'} description={'vdsbsvdhgskhdgjshgdjh'}/>
                <div className={s.myWorkItem}>
                    <div className={s.myWorkTwoItemImgButton}><a href={''}> Смотреть</a></div>
                    <div className={s.myWorkDescr}><h6 className={s.myWorkName}>Название проекта</h6>
                        <p>Краткое Описание</p></div>
                </div>
                <div className={s.myWorkItem}>

                    <div className={s.myWorkThreeItemImgButton}><a href={''}> Смотреть</a></div>
                    <div className={s.myWorkDescr}><h6 className={s.myWorkName}>Название проекта</h6>
                        <p>Краткое Описание</p></div>
                </div>

            </div>
        </div>
    );
};

export default MyWorks;