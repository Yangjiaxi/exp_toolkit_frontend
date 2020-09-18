import { getProjEpic } from "./getProj";
import { deleteProjEpic } from "./deleteProj";
import { getProjInfoEpic } from "./getProjInfo";
import { createProjEpic } from "./createProj";
import { getExpEpic } from "./getExp";
import { getProjConfEpic } from "./getProjConf";
import { modifyProjEpic } from "./modifyProj";
import { getTrashEpic } from "./getTrash";
import { restoreProjEpic } from "./restoreProj";

export default [
  getProjEpic,
  getTrashEpic,
  deleteProjEpic,
  restoreProjEpic,
  getProjInfoEpic,
  createProjEpic,
  getExpEpic,
  getProjConfEpic,
  modifyProjEpic,
];
