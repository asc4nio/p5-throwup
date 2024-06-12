export const PRIMITIVES = {
  point: {
    left: (p5, x, y, w, h) => {
      p5.point(x, y + h * 0.5);
    },
    right: (p5, x, y, w, h) => {
      p5.point(x + w, y + h * 0.5);
    },
    top: (p5, x, y, w, h) => {
      p5.point(x + w * 0.5, y + h * 0.5);
    },
    bottom: (p5, x, y, w, h) => {
      p5.point(x + w * 0.5, y + h);
    },
    bl: (p5, x, y, w, h) => {
      p5.point(x, y + h);
    },
    br: (p5, x, y, w, h) => {
      p5.point(x + w, y + h);
    },
    tl: (p5, x, y, w, h) => {
      p5.point(x, y);
    },
    tr: (p5, x, y, w, h) => {
      p5.point(x + w, y);
    },
  },
  line: {
    left: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y);
      p5.vertex(x, y + h);
      p5.endShape();
    },
    right: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x + w, y);
      p5.vertex(x + w, y + h);
      p5.endShape();
    },
    top: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y);
      p5.vertex(x + w, y);
      p5.endShape();
    },
    bottom: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y + h);
      p5.vertex(x + w, y + h);
      p5.endShape();
    },
    centerY: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x + w * 0.5, y);
      p5.vertex(x + w * 0.5, y + h);
      p5.endShape();
    },
    centerX: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y + h * 0.5);
      p5.vertex(x + w, y + h * 0.5);
      p5.endShape();
    },
  },
  halfLine: {
    vtl: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y);
      p5.vertex(x, y + h * 0.5);
      p5.endShape();
    },
    vtr: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x + w, y);
      p5.vertex(x + w, y + h * 0.5);
      p5.endShape();
    },
    vbl: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x, y + h * 0.5);
      p5.vertex(x, y + h);
      p5.endShape();
    },
    vbr: (p5, x, y, w, h) => {
      p5.beginShape();
      p5.vertex(x + w, y + h * 0.5);
      p5.vertex(x + w, y + h);
      p5.endShape();
    },
  },
  arc: {
    bl: (p5, x, y, w, h) => {
      p5.arc(x, y + h, w * 2, h * 2, p5.PI * 1.5, p5.PI * 2);
    },
    br: (p5, x, y, w, h) => {
      p5.arc(x + w, y + h, w * 2, h * 2, p5.PI * 1, p5.PI * 1.5);
    },
    tl: (p5, x, y, w, h) => {
      p5.arc(x + w, y, w * 2, h * 2, p5.PI * 0.5, p5.PI * 1);
    },
    tr: (p5, x, y, w, h) => {
      p5.arc(x, y, w * 2, h * 2, p5.PI * 0, p5.PI * 0.5);
    },
  },
  halfArc: {
    bl: (p5, x, y, w, h) => {
      p5.arc(x, y + h, w, h, p5.PI * 1.5, p5.PI * 2);
    },
    br: (p5, x, y, w, h) => {
      p5.arc(x + w, y + h, w, h, p5.PI * 1, p5.PI * 1.5);
    },
    tl: (p5, x, y, w, h) => {
      p5.arc(x + w, y, w, h, p5.PI * 0.5, p5.PI * 1);
    },
    tr: (p5, x, y, w, h) => {
      p5.arc(x, y, w, h, p5.PI * 0, p5.PI * 0.5);
    },
  },
};

export const COMPS = {
  corner: {
    tl: (p5, x, y, w, h) => {
      PRIMITIVES.line.left(p5, x, y, w, h);
      PRIMITIVES.line.top(p5, x, y, w, h);
    },
    tr: (p5, x, y, w, h) => {
      PRIMITIVES.line.right(p5, x, y, w, h);
      PRIMITIVES.line.top(p5, x, y, w, h);
    },
    bl: (p5, x, y, w, h) => {
      PRIMITIVES.line.left(p5, x, y, w, h);
      PRIMITIVES.line.bottom(p5, x, y, w, h);
    },
    br: (p5, x, y, w, h) => {
      PRIMITIVES.line.right(p5, x, y, w, h);
      PRIMITIVES.line.bottom(p5, x, y, w, h);
    },
  },
  openSquare: {
    top: (p5, x, y, w, h) => {
      PRIMITIVES.line.left(p5, x, y, w, h);
      PRIMITIVES.line.bottom(p5, x, y, w, h);
      PRIMITIVES.line.right(p5, x, y, w, h);
    },
    bottom: (p5, x, y, w, h) => {
      PRIMITIVES.line.left(p5, x, y, w, h);
      PRIMITIVES.line.top(p5, x, y, w, h);
      PRIMITIVES.line.right(p5, x, y, w, h);
    },
    left: (p5, x, y, w, h) => {
      PRIMITIVES.line.right(p5, x, y, w, h);
      PRIMITIVES.line.top(p5, x, y, w, h);
      PRIMITIVES.line.right(p5, x, y, w, h);
    },
    right: (p5, x, y, w, h) => {
      PRIMITIVES.line.left(p5, x, y, w, h);
      PRIMITIVES.line.top(p5, x, y, w, h);
      PRIMITIVES.line.bottom(p5, x, y, w, h);
    },
  },
  entrance: {
    tl: (p5, x, y, w, h) => {
      PRIMITIVES.halfLine.vtl(p5, x, y, w, h);
      PRIMITIVES.halfArc.bl(p5, x, y, w, h);
    },
    bl: (p5, x, y, w, h) => {
      PRIMITIVES.halfLine.vbl(p5, x, y, w, h);
      PRIMITIVES.halfArc.tr(p5, x, y, w, h);
    },
    tr: (p5, x, y, w, h) => {
      PRIMITIVES.halfLine.vtr(p5, x, y, w, h);
      PRIMITIVES.halfArc.br(p5, x, y, w, h);
    },
    br: (p5, x, y, w, h) => {
      PRIMITIVES.halfLine.vbr(p5, x, y, w, h);
      PRIMITIVES.halfArc.tl(p5, x, y, w, h);
    },
  },
};

export const LETTERS = {
  " ": [
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[""], [""], [""]],
    [[""], [""], [""]],
  ],
  a: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["lineL"], ["pointBR"], ["entranceTR"]],
    [["lineL"], [""], ["entranceBR"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  b: [
    [["openSquareB"], ["arcBR"], ["arcBL"]],
    [["entranceTL"], ["pointL"], ["arcTR"]],
    [["entranceBL"], ["pointL"], ["arcBL"]],
    [["openSquareT"], ["arcTL"], ["arcTR"]],
  ],
  c: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["lineL"], ["lineB"], ["arcTR"]],
    [["lineL"], [""], ["arcBL"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  d: [
    [["arcBR"], ["lineT"], ["arcBL"]],
    [["entranceTL"], ["pointBL"], ["lineR"]],
    [["entranceBL"], [""], ["lineR"]],
    [["openSquareT"], ["arcTL"], ["arcTR"]],
  ],
  e: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["arcTL"], [""], ["arcTR"]],
    [["arcBR"], [""], ["arcBL"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  f: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["lineL"], [""], ["arcTR"]],
    [["lineL"], ["cornerBR"], [""]],
    [["openSquareT"], [""], [""]],
  ],
  g: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["lineL"], ["lineL"], ["arcTR"]],
    [["lineL"], ["cornerTL"], ["cornerTR"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  h: [
    [["cornerTL"], ["cornerTR"], ["openSquareB"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["cornerBR"], ["cornerBR"]],
  ],
  i: [
    [["cornerTL"], ["lineT"], ["cornerTR"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["lineB"], ["cornerBR"]],
  ],
  j: [
    [[""], ["cornerTL"], ["cornerTR"]],
    [["arcBR"], ["arcBL"], ["entranceTR"]],
    [["lineL"], [""], ["entranceBR"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  k: [
    [["cornerTL"], ["lineT"], ["openSquareB"]],
    [["entranceTL"], [""], ["arcTR"]],
    [["entranceBL"], [""], ["arcBL"]],
    [["cornerBL"], ["lineB"], ["openSquareT"]],
  ],
  l: [
    [["cornerTL"], ["cornerTR"], [""]],
    [["entranceTL"], [""], ["cornerTR"]],
    [["entranceBL"], [""], ["lineR"]],
    [["cornerBL"], ["lineB"], ["arcTR"]],
  ],
  m: [
    [["cornerTL"], ["lineT", "lineCY"], ["cornerTR"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["openSquareT"], ["cornerBR"]],
  ],
  n: [
    [["cornerTL"], ["lineT"], ["openSquareB"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["cornerBL"], ["cornerBR"]],
  ],
  o: [
    [["arcBR"], ["lineT"], ["arcBL"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["arcTL"], ["lineB"], ["arcTR"]],
  ],
  p: [
    [["openSquareB"], ["arcBR"], ["arcBL"]],
    [["entranceTL"], ["pointL"], ["lineR"]],
    [["entranceBL"], ["lineB"], ["arcTR"]],
    [["cornerBL"], ["lineB", "arcTL"], [""]],
  ],
  q: [
    [["arcBR"], ["arcBL"], [""]],
    [["entranceTL"], [""], ["arcBL"]],
    [["entranceBL"], ["pointR"], ["lineR"]],
    [["arcTL"], ["arcTR"], ["openSquareT"]],
  ],
  r: [
    [["openSquareB"], ["arcBR"], ["arcBL"]],
    [["entranceTL"], [""], ["arcTR"]],
    [["entranceBL"], [""], ["arcBL"]],
    [["openSquareT"], ["cornerBL"], ["cornerBR"]],
  ],
  s: [
    [["arcBR"], ["arcBL"], ["openSquareB"]],
    [["lineL"], ["arcBR"], ["arcBL"]],
    [["arcTL"], ["arcTR"], ["lineR"]],
    [["openSquareT"], ["arcTL"], ["arcTR"]],
  ],
  t: [
    [["cornerTL"], ["lineT"], ["cornerTR"]],
    [["cornerBL"], [""], ["cornerBR"]],
    [["arcBR"], [""], ["arcBL"]],
    [["cornerBL"], ["lineB"], ["cornerBR"]],
  ],
  u: [
    [["openSquareB"], ["lineT"], ["cornerTR"]],
    [["entranceTL", "lineR"], [""], ["lineR"]],
    [["entranceBL"], [""], ["lineR"]],
    [["openSquareT"], ["arcTL"], ["arcTR"]],
  ],
  v: [
    [["cornerTL"], ["cornerTR"], ["cornerTR"]],
    [["entranceTL"], ["lineR"], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["arcTL"], ["lineB"], ["arcTR"]],
  ],
  w: [
    [["cornerTL"], ["openSquareB"], ["openSquareB"]],
    [["entranceTL"], ["lineL", "lineR"], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["lineB", "lineCY"], ["cornerBR"]],
  ],
  x: [
    [["cornerTL"], ["lineT", "lineCY"], ["cornerTR"]],
    [["entranceTL"], [""], ["entranceTR"]],
    [["entranceBL"], [""], ["entranceBR"]],
    [["cornerBL"], ["lineB", "lineCY"], ["cornerBR"]],
  ],

  y: [
    [["cornerTL"], ["lineT", "lineCY"], ["cornerTR"]],
    [["lineL"], ["lineCY"], ["entranceTR"]],
    [["arcTL"], ["lineB"], ["entranceBR"]],
    [["openSquareR"], ["lineB"], ["cornerBR"]],
  ],
  z: [
    [["cornerTL"], ["lineT"], ["cornerTR"]],
    [["arcBR"], ["lineT"], ["lineR"]],
    [["lineL"], ["lineB"], ["arcTR"]],
    [["cornerBL"], ["lineB"], ["cornerBR"]],
  ],
};

export function mapAction(p5, input, pos, size) {
  //   console.log(input, pos, size);

  switch (input) {
    case "":
      break;
    //point
    case "pointL":
      PRIMITIVES.point.left(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointR":
      PRIMITIVES.point.right(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointT":
      PRIMITIVES.point.top(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointB":
      PRIMITIVES.point.bottom(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointTL":
      PRIMITIVES.point.tl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointTR":
      PRIMITIVES.point.tr(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointBL":
      PRIMITIVES.point.bl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "pointBR":
      PRIMITIVES.point.br(p5, pos.x, pos.y, size.x, size.y);
      break;

    //line
    case "lineL":
      PRIMITIVES.line.left(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "lineR":
      PRIMITIVES.line.right(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "lineT":
      PRIMITIVES.line.top(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "lineB":
      PRIMITIVES.line.bottom(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "lineCY":
      PRIMITIVES.line.centerY(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "lineCX":
      PRIMITIVES.line.centerX(p5, pos.x, pos.y, size.x, size.y);
      break;

    //halfLine
    case "halfLineVBL":
      PRIMITIVES.halfLine.vbl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "halfLineVBR":
      PRIMITIVES.halfLine.vbr(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "halfLineVTL":
      PRIMITIVES.halfLine.vtl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "halfLineVTR":
      PRIMITIVES.halfLine.vtr(p5, pos.x, pos.y, size.x, size.y);
      break;

    //corner
    case "cornerTL":
      COMPS.corner.tl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "cornerTR":
      COMPS.corner.tr(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "cornerBL":
      COMPS.corner.bl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "cornerBR":
      COMPS.corner.br(p5, pos.x, pos.y, size.x, size.y);
      break;

    //openSquare
    case "openSquareT":
      COMPS.openSquare.top(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "openSquareB":
      COMPS.openSquare.bottom(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "openSquareL":
      COMPS.openSquare.left(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "openSquareR":
      COMPS.openSquare.right(p5, pos.x, pos.y, size.x, size.y);
      break;

    //arc
    case "arcBR":
      PRIMITIVES.arc.br(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "arcBL":
      PRIMITIVES.arc.bl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "arcTR":
      PRIMITIVES.arc.tr(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "arcTL":
      PRIMITIVES.arc.tl(p5, pos.x, pos.y, size.x, size.y);
      break;

    //entrance
    case "entranceTL":
      COMPS.entrance.tl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "entranceBL":
      COMPS.entrance.bl(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "entranceTR":
      COMPS.entrance.tr(p5, pos.x, pos.y, size.x, size.y);
      break;
    case "entranceBR":
      COMPS.entrance.br(p5, pos.x, pos.y, size.x, size.y);
      break;
    default:
      console.warn("switch error", input, pos, size);
  }
}
