import { KibanaVisualizationAggregationModel } from './kibana-visualization-aggregation.model';
import { KibanaVisualizationCategoryAxis } from './kibana-visualization-category-axis.model';
import { KibanaVisualizationSeriesParamModel } from './kibana-visualization-series-param.model';

export class VisualizationStateModel {
  public aggs: KibanaVisualizationAggregationModel[] = [];
  public params = {
    addLegend: true,
    addTimeMarker: false,
    addTooltip: true,
    categoryAxes: [],
    grid: {
      categoryLines: false,
      style: {
        color: '#eee',
      },
    },
    legendPosition: 'right',
    seriesParams: [],
    times: [],
    type: 'line',
    valueAxes: [
      {
        id: 'ValueAxis-1',
        labels: {
          filter: false,
          rotate: 0,
          show: true,
          truncate: 100,
        },
        name: 'LeftAxis-1',
        position: 'left',
        scale: {
          mode: 'normal',
          type: 'linear',
        },
        show: true,
        style: {},
        title: {
          text: 'Count',
        },
        type: 'value',
      },
    ],
  };
  public type: string;

  constructor(
    aggregations: KibanaVisualizationAggregationModel[],
    type: string,
    categoryAxes: KibanaVisualizationCategoryAxis[],
    seriesParams: KibanaVisualizationSeriesParamModel[]
  ) {
    this.aggs = aggregations;
    this.type = type;
    this.params.categoryAxes = categoryAxes;
    this.params.seriesParams = seriesParams;
  }

  public toString(): string {
    return JSON.stringify(this);
  }
}