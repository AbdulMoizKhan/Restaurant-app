try {
  (() => {
    var g = __REACT__,
      {
        Children: ht,
        Component: Ot,
        Fragment: _t,
        Profiler: vt,
        PureComponent: Pt,
        StrictMode: Tt,
        Suspense: Et,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Lt,
        cloneElement: Rt,
        createContext: Ct,
        createElement: kt,
        createFactory: Nt,
        createRef: wt,
        forwardRef: xt,
        isValidElement: jt,
        lazy: It,
        memo: Bt,
        startTransition: At,
        unstable_act: Dt,
        useCallback: Mt,
        useContext: Ht,
        useDebugValue: Kt,
        useDeferredValue: Yt,
        useEffect: Ft,
        useId: rt,
        useImperativeHandle: Wt,
        useInsertionEffect: $t,
        useLayoutEffect: qt,
        useMemo: Gt,
        useReducer: Ut,
        useRef: Vt,
        useState: zt,
        useSyncExternalStore: Qt,
        useTransition: Jt,
        version: Zt,
      } = __REACT__;
    var ec = __STORYBOOK_API__,
      {
        ActiveTabs: nc,
        Consumer: ac,
        ManagerContext: sc,
        Provider: ic,
        RequestResponseError: uc,
        addons: w,
        combineParameters: lc,
        controlOrMetaKey: pc,
        controlOrMetaSymbol: dc,
        eventMatchesShortcut: mc,
        eventToShortcut: yc,
        experimental_requestResponse: fc,
        isMacLike: gc,
        isShortcutTaken: Sc,
        keyToSymbol: bc,
        merge: hc,
        mockChannel: Oc,
        optionOrAltSymbol: _c,
        shortcutMatchesShortcut: vc,
        shortcutToHumanString: Pc,
        types: D,
        useAddonState: Tc,
        useArgTypes: Ec,
        useArgs: Lc,
        useChannel: Rc,
        useGlobalTypes: Cc,
        useGlobals: kc,
        useParameter: x,
        useSharedState: Nc,
        useStoryPrepared: wc,
        useStorybookApi: xc,
        useStorybookState: jc,
      } = __STORYBOOK_API__;
    var Mc = __STORYBOOK_THEMING__,
      {
        CacheProvider: Hc,
        ClassNames: Kc,
        Global: Yc,
        ThemeProvider: Fc,
        background: rc,
        color: Wc,
        convert: $c,
        create: qc,
        createCache: Gc,
        createGlobal: Uc,
        createReset: Vc,
        css: zc,
        darken: Qc,
        ensure: Jc,
        ignoreSsrWarning: Zc,
        isPropValid: Xc,
        jsx: to,
        keyframes: co,
        lighten: oo,
        styled: R,
        themes: eo,
        typography: no,
        useTheme: ao,
        withTheme: so,
      } = __STORYBOOK_THEMING__;
    var mo = __STORYBOOK_ROUTER__,
      {
        BaseLocationProvider: yo,
        DEEPLY_EQUAL: fo,
        Link: M,
        Location: go,
        LocationProvider: So,
        Match: bo,
        Route: ho,
        buildArgsParam: Oo,
        deepDiff: _o,
        getMatch: vo,
        parsePath: Po,
        queryFromLocation: To,
        queryFromString: Eo,
        stringifyQuery: Lo,
        useNavigate: Ro,
      } = __STORYBOOK_ROUTER__;
    var xo = __STORYBOOK_COMPONENTS__,
      {
        A: jo,
        ActionBar: Io,
        AddonPanel: Bo,
        Badge: Ao,
        Bar: Do,
        Blockquote: Mo,
        Button: Ho,
        ClipboardCode: Ko,
        Code: Yo,
        DL: Fo,
        Div: ro,
        DocumentWrapper: Wo,
        EmptyTabContent: $o,
        ErrorFormatter: qo,
        FlexBar: Go,
        Form: Uo,
        H1: Vo,
        H2: zo,
        H3: Qo,
        H4: Jo,
        H5: Zo,
        H6: Xo,
        HR: te,
        IconButton: ce,
        IconButtonSkeleton: oe,
        Icons: ee,
        Img: ne,
        LI: ae,
        Link: se,
        ListItem: ie,
        Loader: ue,
        Modal: le,
        OL: pe,
        P: de,
        Placeholder: me,
        Pre: ye,
        ResetWrapper: fe,
        ScrollArea: ge,
        Separator: Se,
        Spaced: be,
        Span: he,
        StorybookIcon: Oe,
        StorybookLogo: _e,
        Symbols: ve,
        SyntaxHighlighter: H,
        TT: Pe,
        TabBar: Te,
        TabButton: Ee,
        TabWrapper: Le,
        Table: Re,
        Tabs: Ce,
        TabsState: ke,
        TooltipLinkList: Ne,
        TooltipMessage: we,
        TooltipNote: xe,
        UL: je,
        WithTooltip: Ie,
        WithTooltipPure: Be,
        Zoom: Ae,
        codeCommon: De,
        components: Me,
        createCopyToClipboardFunction: He,
        getStoryHref: Ke,
        icons: Ye,
        interleaveSeparators: Fe,
        nameSpaceClassNames: re,
        resetComponents: We,
        withReset: $e,
      } = __STORYBOOK_COMPONENTS__;
    var V = !0,
      j = "Invariant failed";
    function K(t, c) {
      if (!t) {
        if (V) throw new Error(j);
        var o = typeof c == "function" ? c() : c,
          e = o ? "".concat(j, ": ").concat(o) : j;
        throw new Error(e);
      }
    }
    function P(t) {
      "@babel/helpers - typeof";
      return (
        (P =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (c) {
                return typeof c;
              }
            : function (c) {
                return c &&
                  typeof Symbol == "function" &&
                  c.constructor === Symbol &&
                  c !== Symbol.prototype
                  ? "symbol"
                  : typeof c;
              }),
        P(t)
      );
    }
    function z(t, c) {
      if (P(t) != "object" || !t) return t;
      var o = t[Symbol.toPrimitive];
      if (o !== void 0) {
        var e = o.call(t, c || "default");
        if (P(e) != "object") return e;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (c === "string" ? String : Number)(t);
    }
    function Q(t) {
      var c = z(t, "string");
      return P(c) == "symbol" ? c : c + "";
    }
    function J(t, c, o) {
      return (
        (c = Q(c)),
        c in t
          ? Object.defineProperty(t, c, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[c] = o),
        t
      );
    }
    function B() {
      return (
        (B = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var c = 1; c < arguments.length; c++) {
                var o = arguments[c];
                for (var e in o)
                  Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
              }
              return t;
            }),
        B.apply(this, arguments)
      );
    }
    function Y(t, c) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var e = Object.getOwnPropertySymbols(t);
        c &&
          (e = e.filter(function (n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable;
          })),
          o.push.apply(o, e);
      }
      return o;
    }
    function _(t) {
      for (var c = 1; c < arguments.length; c++) {
        var o = arguments[c] != null ? arguments[c] : {};
        c % 2
          ? Y(Object(o), !0).forEach(function (e) {
              J(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : Y(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e),
                );
              });
      }
      return t;
    }
    function Z(t) {
      var c = t.length;
      if (c === 0 || c === 1) return t;
      if (c === 2)
        return [
          t[0],
          t[1],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0]),
        ];
      if (c === 3)
        return [
          t[0],
          t[1],
          t[2],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2]),
          "".concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0]),
        ];
      if (c >= 4)
        return [
          t[0],
          t[1],
          t[2],
          t[3],
          "".concat(t[0], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[3]),
          "".concat(t[3], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[1], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[0], ".").concat(t[2], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[0], ".").concat(t[3], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[2], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[0], ".").concat(t[3], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[1], ".").concat(t[2], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[1], ".").concat(t[3], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[1], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[0], ".").concat(t[3], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[0], ".").concat(t[3]),
          "".concat(t[2], ".").concat(t[1], ".").concat(t[3], ".").concat(t[0]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[2], ".").concat(t[3], ".").concat(t[1], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[1], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[0], ".").concat(t[2], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[0], ".").concat(t[2]),
          "".concat(t[3], ".").concat(t[1], ".").concat(t[2], ".").concat(t[0]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[0], ".").concat(t[1]),
          "".concat(t[3], ".").concat(t[2], ".").concat(t[1], ".").concat(t[0]),
        ];
    }
    var I = {};
    function X(t) {
      if (t.length === 0 || t.length === 1) return t;
      var c = t.join(".");
      return I[c] || (I[c] = Z(t)), I[c];
    }
    function tt(t) {
      var c =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        o = arguments.length > 2 ? arguments[2] : void 0,
        e = t.filter(function (m) {
          return m !== "token";
        }),
        n = X(e);
      return n.reduce(function (m, v) {
        return _(_({}, m), o[v]);
      }, c);
    }
    function F(t) {
      return t.join(" ");
    }
    function ct(t, c) {
      var o = 0;
      return function (e) {
        return (
          (o += 1),
          e.map(function (n, m) {
            return r({
              node: n,
              stylesheet: t,
              useInlineStyles: c,
              key: "code-segment-".concat(o, "-").concat(m),
            });
          })
        );
      };
    }
    function r(t) {
      var c = t.node,
        o = t.stylesheet,
        e = t.style,
        n = e === void 0 ? {} : e,
        m = t.useInlineStyles,
        v = t.key,
        u = c.properties,
        T = c.type,
        O = c.tagName,
        C = c.value;
      if (T === "text") return C;
      if (O) {
        var k = ct(o, m),
          a;
        if (!m) a = _(_({}, u), {}, { className: F(u.className) });
        else {
          var s = Object.keys(o).reduce(function (d, y) {
              return (
                y.split(".").forEach(function (f) {
                  d.includes(f) || d.push(f);
                }),
                d
              );
            }, []),
            l = u.className && u.className.includes("token") ? ["token"] : [],
            i =
              u.className &&
              l.concat(
                u.className.filter(function (d) {
                  return !s.includes(d);
                }),
              );
          a = _(
            _({}, u),
            {},
            {
              className: F(i) || void 0,
              style: tt(u.className, Object.assign({}, u.style, n), o),
            },
          );
        }
        var p = k(c.children);
        return g.createElement(O, B({ key: v }, a), p);
      }
    }
    var ot = R(M)(({ theme: t }) => ({
        display: "block",
        textDecoration: "none",
        borderRadius: t.appBorderRadius,
        color: "inherit",
        "&:hover": { background: t.background.hoverable },
      })),
      et = R.div(({ theme: t }) => ({
        background: t.background.hoverable,
        borderRadius: t.appBorderRadius,
      })),
      nt = R(H)(({ theme: t }) => ({ fontSize: t.typography.size.s2 - 1 })),
      at = (t, c) =>
        t.startLoc.line === c.startLoc.line &&
        t.startLoc.col === c.startLoc.col &&
        t.endLoc.line === c.endLoc.line &&
        t.endLoc.col === c.endLoc.col,
      st = ({ api: t }) => {
        let c = t.getCurrentStoryData(),
          o = g.useRef(null),
          { source: e, locationsMap: n } = x("storySource", {}),
          { source: { originalSource: m } = {} } = x("docs", {}),
          v = e || m || "loading source...",
          u = n
            ? Object.keys(n).find((a) => {
                let s = a.split("--");
                return c.id.endsWith(s[s.length - 1]);
              })
            : void 0,
          T = n && u ? n[u] : void 0;
        g.useEffect(() => {
          o.current && o.current.scrollIntoView();
        }, [o.current]);
        let O = ({ rows: a, stylesheet: s, useInlineStyles: l }) =>
            a.map((i, p) =>
              r({
                node: i,
                stylesheet: s,
                useInlineStyles: l,
                key: `code-segment${p}`,
              }),
            ),
          C = ({
            rows: a,
            stylesheet: s,
            useInlineStyles: l,
            location: i,
            id: p,
            refId: d,
          }) => {
            let y = i.startLoc.line - 1,
              f = i.endLoc.line,
              N = a.slice(y, f),
              E = O({ rows: N, stylesheet: s, useInlineStyles: l }),
              L = `${y}-${f}`;
            return T && at(i, T)
              ? g.createElement(et, { key: L, ref: o }, E)
              : g.createElement(
                  ot,
                  { to: d ? `/story/${d}_${p}` : `/story/${p}`, key: L },
                  E,
                );
          },
          k = ({ rows: a, stylesheet: s, useInlineStyles: l }) => {
            let i = [],
              p = 0;
            K(n, "locationsMap should be defined while creating parts"),
              Object.keys(n).forEach((y) => {
                let f = n[y],
                  N = f.startLoc.line - 1,
                  E = f.endLoc.line,
                  { title: L, refId: $ } = c,
                  A = y.split("--"),
                  q = t.storyId(L, A[A.length - 1]),
                  G = O({
                    rows: a.slice(p, N),
                    stylesheet: s,
                    useInlineStyles: l,
                  }),
                  U = C({
                    rows: a,
                    stylesheet: s,
                    useInlineStyles: l,
                    location: f,
                    id: q,
                    refId: $,
                  });
                i.push(...G), i.push(U), (p = E);
              });
            let d = O({ rows: a.slice(p), stylesheet: s, useInlineStyles: l });
            return i.push(...d), i;
          };
        return c
          ? g.createElement(
              nt,
              {
                language: "jsx",
                showLineNumbers: !0,
                renderer: ({ rows: a, stylesheet: s, useInlineStyles: l }) => {
                  let i = a.map(({ properties: d, ...y }) => ({
                    ...y,
                    properties: { className: [] },
                  }));
                  if (!n || !Object.keys(n).length)
                    return O({ rows: i, stylesheet: s, useInlineStyles: l });
                  let p = k({ rows: i, stylesheet: s, useInlineStyles: l });
                  return g.createElement("span", null, p);
                },
                format: !1,
                copyable: !1,
                padded: !0,
                wrapLongLines: !0,
                lineProps: { style: { whiteSpace: "pre" } },
              },
              v,
            )
          : null;
      },
      W = "storybook/source-loader",
      it = `${W}/panel`;
    w.register(W, (t) => {
      w.add(it, {
        type: D.PANEL,
        title: "Code",
        render: ({ active: c }) => (c ? g.createElement(st, { api: t }) : null),
        paramKey: "storysource",
      });
    });
  })();
} catch (e) {
  console.error(
    "[Storybook] One of your manager-entries failed: " + import.meta.url,
    e,
  );
}
