/** Public types kept minimal for now; we’ll flesh them out in later sprints. */
export type TextAlign = "left" | "center" | "right";

export interface PxCanvas {
  widthPx: number;
  heightPx: number;
  dpi?: number; // default 96 if omitted
}

export interface TextRun {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  color?: string; // #RRGGBB
  font?: string; // e.g. "Inter"
  sizePx?: number; // font size in px
}

export interface TextBox {
  xPx: number;
  yPx: number;
  wPx: number;
  hPx: number;
  runs: TextRun[];
  align?: TextAlign;
}

export interface ImageBox {
  xPx: number;
  yPx: number;
  wPx: number;
  hPx: number;
  data: Uint8Array;
  contentType: "image/png" | "image/jpeg";
  name?: string;
}

/** SlideBuilder: chainable per-slide API. Methods are stubs for now. */
export class SlideBuilder {
  /** (internal) collect elements here later */
  // private _elements: Array<{ kind: 'text'|'image'; payload: any }> = [];

  text(_box: TextBox): this {
    // this._elements.push({ kind: 'text', payload: _box });
    return this;
  }

  image(_box: ImageBox): this {
    // this._elements.push({ kind: 'image', payload: _box });
    return this;
  }
}

/** PptBuilder: fluent presentation builder */
export class PptBuilder {
  // private _canvas: PxCanvas | null = null;
  // private _meta: { title?: string; subject?: string; creator?: string; keywords?: string[] } = {};
  // private _fixed: Array<(s: SlideBuilder) => SlideBuilder | void> = [];
  // private _loops: Array<{ position: number; items: any[]; tpl: (item: any, i: number) => (s: SlideBuilder) => SlideBuilder | void }> = [];
  // private _opts: { compression?: 'auto' | 'store' | 'deflate'; boundsWarnings?: boolean } = {};

  canvas(_c: PxCanvas): this {
    // this._canvas = _c;
    return this;
  }

  metadata(_m: {
    title?: string;
    subject?: string;
    creator?: string;
    keywords?: string[];
  }): this {
    // this._meta = { ...this._meta, ..._m };
    return this;
  }

  options(_o: {
    compression?: "auto" | "store" | "deflate";
    boundsWarnings?: boolean;
  }): this {
    // this._opts = { ...this._opts, ..._o };
    return this;
  }

  addSlide(fn: (s: SlideBuilder) => SlideBuilder | void): this {
    // this._fixed.push(fn);
    void fn; // silence TS for now
    return this;
  }

  loop<T>(
    _opts: { position: number },
    _items: T[],
    _template: (
      item: T,
      index: number
    ) => (s: SlideBuilder) => SlideBuilder | void
  ): this {
    // this._loops.push({ position: _opts.position, items: _items, tpl: _template });
    return this;
  }

  /** Build the .pptx as Uint8Array; stubbed for Sprint 0. */
  async emit(): Promise<Uint8Array> {
    throw new Error(
      "Not implemented yet: emit() will produce a .pptx in Sprint 3+"
    );
  }
}

/** Optional template helpers (stubs for now) */
export function templateToJSON(
  _name: string,
  _fn: (s: SlideBuilder) => SlideBuilder | void
): string {
  throw new Error("Not implemented yet: templateToJSON");
}

export function templateFromJSON(
  _json: string
): (s: SlideBuilder) => SlideBuilder {
  throw new Error("Not implemented yet: templateFromJSON");
}
