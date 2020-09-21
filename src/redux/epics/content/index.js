import { getProjEpic } from "./getProj";
import { deleteProjEpic } from "./deleteProj";
import { getProjInfoEpic } from "./getProjInfo";
import { createProjEpic } from "./createProj";
import { getExpEpic } from "./getExp";
import { getProjConfEpic } from "./getProjConf";
import { modifyProjEpic } from "./modifyProj";
import { getTrashEpic } from "./getTrash";
import { restoreProjEpic } from "./restoreProj";
import { deleteExpEpic } from "./deleteExp";

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
  deleteExpEpic,
];
