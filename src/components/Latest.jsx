import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatest } from "../features/latest/latestAction";

export default function Latest (){
    const dispatch = useDispatch()
    const {data,status,error} = useSelector((state) => state.latest )
    useEffect(()=>{
        dispatch(fetchLatest())
    },[])
  return (
    <div style={{ margin: 0, fontFamily: 'Arial, sans-serif', background: '#0b2c3d', color: 'white' }}>
      <div style={{ padding: '30px', marginLeft: '150px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h2 style={{ margin: 0, fontSize: '28px' }}>Latest Trailers</h2>
          <div>
            <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', marginLeft: '10px', cursor: 'pointer', fontWeight: 'bold' }}>Popular</button>
            <button style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', marginLeft: '10px', cursor: 'pointer', fontWeight: 'bold', backgroundColor: '#1ed6c3', color: 'black' }}>In Theaters</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
          <div style={{ width: '300px', background: '#000', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
            <img src="https://hablandotodomedia.com/wp-content/uploads/2025/05/p29399873_v_h8_aa.jpg" alt="Rosario" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>&#9654;</span>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#112f41' }}>
              <h3 style={{ marginLeft: '100px', fontSize: '20px' }}>Rosario</h3>
              <p style={{ marginLeft: '100px', fontSize: '14px', color: '#b0c4cd' }}>Watch Now</p>
            </div>
          </div>
          <div style={{ width: '300px', background: '#000', borderRadius: '10px', overflow: 'hidden', position: 'relative' }}>
            <img src="https://musesofmedia.ca/wp-content/uploads/2025/04/sinnerss.jpg?w=1024" alt="Sinners" style={{ width: '100%', display: 'block' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(255,255,255,0.8)', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <span style={{ fontSize: '20px', color: 'black' }}>&#9654;</span>
            </div>
            <div style={{ padding: '15px', backgroundColor: '#112f41' }}>
              <h3 style={{ marginLeft: '100px', fontSize: '20px' }}>Sinners</h3>
              <p style={{ marginLeft: '100px', fontSize: '14px', color: '#b0c4cd' }}>Watch Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


