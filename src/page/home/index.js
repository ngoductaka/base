import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  SwapOutlined,
} from '@ant-design/icons'
// import './style.css';

import Chart from './chart';
import { Clock } from './clock';


const MAX = 6;
const Line = () => {
  const [next, setNext] = useState(0);
  return (
    <div style={{
      background: '#fff',
      backgroundColor: '#011528',
      height: 'calc(100vh)', overflow: 'hidden'
    }} className='hidden-scroll'>
      {next == 0 && <V3 text="Fine MS Vina Assemly" />}
      {next == 1 && <V1 />}
      {next == 2 && <V2 />}
      {next == 3 && <V4 />}
      {next == 4 && <V5 />}
      {next == 5 && <div>
        <NidecHeader /><Chart /></div>}
      <BtnFull next={() => setNext((next + 1) % MAX)} />
    </div>
  )
}

const V1 = () => {
  return <div>
    <NidecHeader />
    <div style={{
      color: '#fff', fontSize: '14vh', height: 'calc(90vh)',
      margin: '0px auto',
      fontWeight: '900',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <div style={{ display: 'flex', minWidth: 'calc(100vh)', }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 이름</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>ABC-123</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>목표 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>1000</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>800</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>비율</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>80%</div>
      </div>
    </div>
  </div>
}


const V4 = () => {
  return <div>
    <NidecHeader />
    <div style={{
      color: '#fff', fontSize: '14vh', height: 'calc(90vh)',
      margin: '0px auto',
      fontWeight: '900',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <div style={{ display: 'flex', minWidth: 'calc(100vh)', }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 이름</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>ABC-123</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>목표 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>1000</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>500</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>비율</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, color: '#FEAD09' }}>50%</div>
      </div>
    </div>
  </div>
}


const V5 = () => {
  return <div>
    <NidecHeader />
    <div style={{
      color: '#fff', fontSize: '14vh', height: 'calc(90vh)',
      margin: '0px auto',
      fontWeight: '900',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <div style={{ display: 'flex', minWidth: 'calc(100vh)', }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 이름</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>ABC-123</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>목표 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>1000</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>생산 수량</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>300</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={{ flex: 1, textAlign: 'right', marginRight: 20 }}>비율</div>
        <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, color: 'red' }}>30%</div>
      </div>
    </div>
  </div>
}


const V2 = () => {
  return (
    <div>
      <NidecHeader />
      <div style={{
        color: '#fff', fontSize: '10vh', height: 'calc(90vh)',
        margin: '0px auto',
        fontWeight: '900',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-around'
      }}>
        <div style={{ display: 'flex', minWidth: 'calc(100vh)', }}>
          <div style={{ flex: 1.5, textAlign: 'right', marginRight: 20 }}>Production Name</div>
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>ABC-123</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: 1.5, textAlign: 'right', marginRight: 20 }}>Target Quantity</div>
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>1000</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: 1.5, textAlign: 'right', marginRight: 20 }}>Actual Quantity</div>
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, }}>800</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ flex: 1.5, textAlign: 'right', marginRight: 20 }}>Progress Rate</div>
          <div style={{ flex: 1, textAlign: 'left', marginLeft: 20, color: '#21983F' }}>80%</div>
        </div>
      </div>
    </div>
  )
}

const fakeData = [{
  status: '0',
  Actual: 900,
  Oee: '90',
  name: 'Line-1',
  PLan: 1000,
},

{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-2',
  PLan: 1000,
},
{
  status: '2',
  Actual: 900,
  Oee: '90',
  name: 'Line-3',
  PLan: 1000,
},
{
  status: '3',
  Actual: 900,
  Oee: '90',
  name: 'Line-4',
  PLan: 1000,
},
{
  status: '4',
  Actual: 900,
  Oee: '90',
  name: 'Line-5',
  PLan: 1000,
},
{
  status: '5',
  Actual: 900,
  Oee: '90',
  name: 'Line-6',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-7',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-8',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-9',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-10',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-11',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-12',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-13',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-14',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-15',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-16',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-17',
  PLan: 1000,
},
{
  status: '1',
  Actual: 900,
  Oee: '90',
  name: 'Line-18',
  PLan: 1000,
},
]
const V3 = ({ text }) => {
  return (
    <div>
      <NidecHeader text={text} />
      <div style={{ height: '5vh', width: '100vw', background: '#fff' }}>
        <div style={{ height: '1vh' }}></div>
        <Progress />
      </div>
      <div style={{ width: '100vw' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto', marginLeft: '2vh' }}>
          {
            fakeData.map(i => <Item data={i} />)
          }
        </div>
      </div>
    </div>
  )
}
const Progress = ({ }) => {
  const [per, setPer] = useState(99)
  useEffect(() => {
    const inter = setInterval(() => {
      setPer((per + 1) % 100)
    }, 1000)
    return () => clearInterval(inter)
  }, [per]);

  return (
    <div style={{ width: '100vw', height: '4vh', position: 'relative' }}>
      <div style={{ height: '2vh', position: 'absolute', top: '-0.7vh', left: 0, fontSize: '2.5vh', right: 0, display: 'flex', justifyContent: 'center', fontWeight: '600' }}> Actual:{100000 * per / 100} | Plan:100000</div>
      <div style={{ height: '2vh' }}></div>
      <div style={{ width: `${per}vw`, background: `${per > 50 ? 'green' : 'red'}`, height: '2vh', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', color: '#000', paddingRight: 10, fontWeight: 'bold' }}>
        <span>{per}%</span>
      </div>
    </div >
  )
}

const BtnFull = ({ next }) => {
  return (
    <div onClick={() => next()} style={{
      position: 'fixed', bottom: 10, right: 10, height: 50,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: 50, borderRadius: 50, background: '#ddd', opacity: 0.2
    }}>
      <SwapOutlined style={{ fontSize: 15 }} />
    </div>
  )
}

export default Line;

const NidecHeader = ({ text }) => {
  return (
    <div style={{
      display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
      alignItems: 'center',
      // height: 50,
      lineHeight: '0.7em',
      height: '6vh',
      backgroundColor: '#fff', padding: '0px 10px', zIndex: 100000000,
    }}>
      <div style={{ width: 300 }}>
        <img src={img} style={{ height: '6vh' }} />
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ fontWeight: 'bold', color: '#000', fontSize: '6vh', textAlign: 'center', flex: 1 }}>{text || 'Assembly Line 1'}</h1>
      </div>
      <div style={{ width: 300 }}>
        <div style={{ width: 250 }}><Clock sliceDate={true} style={{ fontSize: 56, color: '#99CE59' }} /></div>
      </div>
    </div>
  );
}

const img = `https://scontent.fhan19-1.fna.fbcdn.net/v/t1.6435-9/64492810_401855193875946_8844591573871099904_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=5ri1R4vP_pQAX8U0P2r&_nc_ht=scontent.fhan19-1.fna&oh=00_AT9T1kwUdOWfhGxIjTuH6471CzwA9IOnlnXbQcV3ftpL5w&oe=633E5971`




export const map_color = {
  'bad': '#F60020',
  'good': '#21983F',
  'medium': '#FEAD09',
  0: '#aaa', // khong tin hieu
  1: '#21983F', // run
  2: '#FEAD09', // idle
  3: '#F60020', // loi
  4: '#082b42', // off
}

const WIDTH = 'calc((100vw - 100px) / 6)'

const Item = ({ data }) => {
  return (
    <div
      style={{
        minHeight: '28vh',
        minWidth: WIDTH,
        // height: WIDTH,
        background: '#ddd',
        margin: 5,
        borderRadius: 6,
      }}>
      <div style={{
        border: `1px solid #ccc`, height: '100%',
        borderRadius: 6, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '3px 0' }}>
          <div style={{ fontSize: '1.5vw', fontWeight: '600' }}>{data.name || '_'}</div>
        </div>
        <div style={{
          flex: 1,
          background: map_color[data.status] || '#ddd',
          borderRadius: 3,
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <span style={{ fontSize: '4.5vw', lineHeight: -10, color: '#fff', fontWeight: '600' }}>{(Number(data.Oee) || 0).toFixed(0)}%</span>
        </div>
        <div style={{ background: '#dedede', fontSize: '1.8vw', fontWeight: '600', padding: '0px 25px', }}>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', lineHeight: -10, }}>
            <span style={{ textAlign: 'left' }}>Actual</span>
            <span style={{ textAlign: 'left' }}>{(Number(data.Actual) || 0).toFixed(0)}</span>
          </div>
          <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', lineHeight: -10, }}>
            <span style={{ textAlign: 'left' }}>Plan</span>
            <span style={{ textAlign: 'left' }}>{(Number(data.PLan) || 0).toFixed(0)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}