import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

import { LineChart as Llchart, Line, } from 'recharts';


const LineChart = () => {

    const [markshit, setMarkshit] = useState([])
    useEffect(() => {
        fetch('MArkshit.json')
            .then(res => res.json())
            .then(date => setMarkshit(date))
    },[])


    return (
        <div>
          <Llchart width={700} height={400}data={markshit}>
          <XAxis dataKey="name"  />
          <YAxis />

                <Line dataKey={'math'} stroke="red"></Line>
                <Line dataKey={'physics'} stroke="green"></Line>
                <Line dataKey={'english'}></Line>
            </Llchart>

            <h1>akhon dekhun bar chart</h1>
            <BarChart width={600} height={300} data={markshit}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="math" fill="#8884d8" barSize={30}>
    </Bar>
    
  </BarChart>
        </div>
    );
};

export default LineChart;