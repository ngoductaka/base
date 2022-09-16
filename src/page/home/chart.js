import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    PauseOutlined, SwapOutlined, PlayCircleOutlined, FullscreenOutlined,
    CaretUpOutlined,
    CaretDownOutlined,
    FullscreenExitOutlined
} from '@ant-design/icons'
// import './style.css';
import axios from 'axios';
import { get } from 'lodash';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { Clock } from './clock';
import logo from './logo_nidec.png';
console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const host = process.env.NODE_ENV === "development" ? '13.229.146.39' : window.location.host.split(":")[0];
const BASE = `http://${host}:5007`;
const options = {
    chart: {
        type: 'spline',
        backgroundColor: 'black',
    },
    title: {
        text: ''
    },
    // subtitle: {
    //     text: 'Source: WorldClimate.com'
    // },
    plotOptions: {
        series: {
            animation: false,
            lineWidth: 5,
            marker: {
                lineWidth: 10,
                lineColor: null
            }
        }
    },
    xAxis: {
        categories: ['9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h'],
        max: 9,
        labels: {
            style: {
                fontSize: 30,
                color: '#fff',
            }
        },
        gridLineWidth: 0
    },
    yAxis: {
        gridLineWidth: 0,
        lineWidth: 1,
        title: {
            text: 'Số lượng',
            style: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#fff',
                align: 'top'
            }
        },
        labels: {
            style: {
                fontSize: 25,
                color: '#fff',
            }
        },
        softMax: 200,
        softMin: 0
    },
};


const NUM_ROWS = 5;

const Line = () => {

    const [dataLineShow, setDataLineShow] = useState([]);
    const [dataChart, setDataChart] = useState(options);
    const [page, setPage] = useState(0);
    const [isPause, setIsPause] = useState(false);
    const [fullScreen, setFullScreen] = useState(true);
    const [fontSize, setFontSize] = useState(Number(localStorage.getItem('font_size') || 36));

    useEffect(() => {
        requestInit();
        let interval = setInterval(() => {
            requestInit();
        }, 5000);
        return () => {
            clearInterval(interval)
        }
    }, []);
    useEffect(() => {
        if (fontSize) {
            localStorage.setItem('font_size', fontSize)
        }
    }, [fontSize])

    useEffect(() => {
        let interChange = null;
        // console.log(isPause, 'isPause--')
        if (!isPause) {
            interChange = setInterval(() => {
                _handleNext();
            }, 5 * 1000)
        }

        return () => {
            clearInterval(interChange)
        }
    }, [page, isPause, get(dataLineShow, 'length', 0)])


    const requestInit = async () => {
        try {
            setDataChart({
                ...dataChart, series: [{
                    "name": "quantity_plan",
                    "data": [
                        0,
                        10,
                        20,
                        68,
                        150,
                        218,
                        259,
                        328,
                        410,
                        492,
                    ],
                    "color": "green",
                    "type": "line"
                },
                {
                    "name": "quantity_actual",
                    "data": [
                        0,
                        9,
                        18,
                        60,
                        130,
                        200,
                        250,
                    ],
                    "color": "blue",
                    "type": "line"
                }
                ]
            });
        } catch (err) {
            alert('Lỗi call api ' + JSON.stringify(err))
        }
    }

    const Com = ({ big = true, ...props }) => {
        return (
            <div style={{ background: '#000', height: '100vh', paddingTop: '3vh' }}>
                <HighchartsReact
                    containerProps={{ style: { height: `85vh` } }}
                    highcharts={Highcharts}
                    options={dataChart}
                />
                <div style={{ height: '7vh', background: '#000', color: '#fff', width: '100vW', position: 'fixed', bottom: 0, left: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{display: 'flex'}}>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}><div style={{ height: '4vh', width: '4vh', borderRadius: '4vh', marginRight: 6, background: 'blue'}} /> Actual</div>
                        <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ height: '4vh', width: '4vh', borderRadius: '4vh', marginRight: 6, background: 'green' }} /> Plan</div>
                    </div>
                </div>
            </div >
        )
    };

    const _handleNext = () => {
        const ceiledPage = Math.ceil(dataLineShow.length / NUM_ROWS) + 1;
        const nextPage = (page + 1) % ceiledPage;
        setPage(nextPage)
    }

    return (
        <Com />
    )
}
const BtnFull = ({ setFullScreen }) => {
    return (
        <div onClick={() => setFullScreen(true)} style={{
            position: 'fixed', bottom: 10, right: 140, height: 50,
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: 50, borderRadius: 50, background: '#ddd', opacity: 0.2
        }}>
            <FullscreenOutlined style={{ fontSize: 15 }} />
        </div>
    )
}
const Header = ({ fontSize, big }) => {
    return (
        <WrapperHeader big={big}>
            <HeaderItem big={big} style={{ flex: 0.85, fontSize }}><span style={{ paddingRight: big ? 30 : 0 }}>Line</span></HeaderItem>
            <HeaderItem big={big} style={{ flex: 2, fontSize }}><span style={{ paddingRight: big ? 30 : 0 }}>Unit Part</span></HeaderItem>
            <HeaderItem big={big} style={{ fontSize, flex: 1.1 }}><span style={{ paddingRight: big ? 30 : 0 }}>Acc Plan</span></HeaderItem>
            <HeaderItem big={big} style={{ fontSize, flex: 1.1 }}><span style={{ paddingRight: big ? 30 : 0 }}>Acc Act</span></HeaderItem>
            <HeaderItem big={big} style={{ flex: 0.9, fontSize }}><span style={{}}>Gap</span></HeaderItem>
        </WrapperHeader>
    )
}

const WrapperHeader = styled.div`
    display: flex;
    background: ${(props) => props.big ? '#8B8B8B' : 'rgb(46, 52, 69)'};
    border-top: 1px solid ${(props) => props.big ? '#8B8B8B' : '#ddd'};
`;
const HeaderItem = styled.div`
    flex: 1;
    color: #fff;
    border-left: ${props => !props.big && '1px solid #fff'};
    border-bottom: ${props => !props.big && '5px solid #ddd'};
    font-size: 3em;
    font-weight: bold;
    text-align: center;
    padding-top: 9px;
    padding-bottom: 9px;
`
// 
const Wrapper = styled.div`
    display: flex;
    border-top: ${props => !props.big && '1px solid #ddd'};
    border-bottom: ${props => !props.big && '5px solid #ddd'};
    /* margin-top: 10px;
    margin-bottom: 3px; */
    background: ${(props) => props.big ? '#8B8B8B' : props.index & 1 ? '#3f3f42' : '#000'} ;
    & .item-text {
        display: inline-block;
        color: #fff;
        font-size: 3.9em;
        font-weight: bold;
        text-align: center;
        display: flex;
        margin: -0.1em auto;
        justify-content: center;
        align-items: center;
        flex: 1;
        border-left: ${props => !props.big && '1px solid #fff'} ;
        /* padding: 10px 0px; */
        height: ${props => props.big ? `calc((100vh - 350px)/${NUM_ROWS})` : `calc((100vh - 110px)/${NUM_ROWS})`};
    }
`;

export default Line;

const NidecHeader = () => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
            alignItems: 'center',
            // height: 50,
            lineHeight: '0.7em',
            backgroundColor: '#000', padding: '0px 10px', zIndex: 100000000
        }}>
            <img src={logo} style={{ height: 50, }} />
            <h1 style={{ fontWeight: 'bold', color: '#fff', fontSize: 60, textAlign: 'center', flex: 1 }}>ASSEMBLE PROGRESS</h1>
            <div style={{ width: 250 }}><Clock sliceDate={true} style={{ fontSize: 56, color: '#99CE59' }} /></div>
        </div>
    );
}