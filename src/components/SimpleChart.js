import { PureComponent } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "09h00",
        BAIXO: 1,
        MÉDIO: 1,
        ALTO: 2
    },
    {
        name: "09h30",
        BAIXO: 1,
        MÉDIO: 2,
        ALTO: 1
    },
    {
        name: "10h00",
        BAIXO: 2,
        MÉDIO: 1,
        ALTO: 1
    },
    {
        name: "10h30",
        BAIXO: 1,
        MÉDIO: 2,
        ALTO: 3
    },
    {
        name: "11h00",
        BAIXO: 2,
        MÉDIO: 0,
        ALTO: 0
    }
];

export default class SimpleChart extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 100,
                        left: 30,
                        bottom: 100,
                        right: 100,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="BAIXO" stroke="#19A7B0" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="MÉDIO" stroke="#ECBA6E" />
                    <Line type="monotone" dataKey="ALTO" stroke="#EC6E6E" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
