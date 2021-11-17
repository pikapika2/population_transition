import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from "highcharts-react-official";

const PopulationGraph: React.FunctionComponent = () => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts);
  }

  const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PopulationGraph