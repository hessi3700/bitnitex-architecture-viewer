import {
  flowRendererV2,
  flowStyles
} from "./chunk-7TRW6OKS.js";
import "./chunk-RE6Y4ADW.js";
import {
  flowDb,
  parser$1
} from "./chunk-FGO4KOAK.js";
import "./chunk-UY5B3JEJ.js";
import "./chunk-RYOGNBJQ.js";
import "./chunk-6VNHA4LF.js";
import "./chunk-VYYWTOVI.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-VFVRWWHV.js";
import {
  __toESM
} from "./chunk-PR4QN5HX.js";

// node_modules/mermaid/dist/flowDiagram-v2-4f6560a1.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-4f6560a1-ZZ5UTEAR.js.map
