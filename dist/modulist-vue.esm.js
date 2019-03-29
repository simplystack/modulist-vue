const e = function (e, t, i, a, n, s, r, o, l, u) { typeof r !== 'boolean' && (l = o, o = r, r = !1); let d; const c = typeof i === 'function' ? i.options : i; if (e && e.render && (c.render = e.render, c.staticRenderFns = e.staticRenderFns, c._compiled = !0, n && (c.functional = !0)), a && (c._scopeId = a), s ? (d = function (e) { (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || typeof __VUE_SSR_CONTEXT__ === 'undefined' || (e = __VUE_SSR_CONTEXT__), t && t.call(this, l(e)), e && e._registeredComponents && e._registeredComponents.add(s); }, c._ssrRegister = d) : t && (d = r ? function () { t.call(this, u(this.$root.$options.shadowRoot)); } : function (e) { t.call(this, o(e)); }), d) if (c.functional) { const h = c.render; c.render = function (e, t) { return d.call(t), h(e, t); }; } else { const f = c.beforeCreate; c.beforeCreate = f ? [].concat(f, d) : [d]; } return i; }; const t = e({ render() { const e = this.$createElement; const t = this._self._c || e; return t('div', { staticClass: 'alert', class: this.classes }, [t('div', { staticClass: 'alert__body' }, [t('div', { staticClass: 'alert__title' }, [this._v(this._s(this.title))]), this._v(' '), t('div', { staticClass: 'alert__text' }, [this._t('default')], 2)])]); }, staticRenderFns: [] }, void 0, { name: 'VAlert', props: { title: { type: String, default: 'Default title' }, type: { type: String, default: 'info', validator(e) { return ['info', 'success', 'warn', 'error'].indexOf(e) > -1; } }, wide: { type: Boolean, default: !1 } }, computed: { classes() { return [`alert--${this.type}`, { 'alert--wide': this.wide }]; } } }, void 0, !1, void 0, void 0, void 0); t.install = function (e) { e.component('VAlert', t); }; const i = e({
  render() {
    const e = this.$createElement; return (this._self._c || e)('img', {
      staticClass: 'avatar',
      attrs: {
        src: this.src, alt: this.alt, width: this.size, height: this.size,
      },
    });
  },
  staticRenderFns: [],
}, void 0, { name: 'VAvatar', props: { src: { type: String, required: !0 }, size: { type: [String, Number], default: 32 }, alt: { type: String, default: 'Avatar' } } }, void 0, !1, void 0, void 0, void 0); i.install = function (e) { e.component('VAvatar', i); }; const a = e({ render() { const e = this.$createElement; return (this._self._c || e)('div', { staticClass: 'badge', class: this.classes, domProps: { textContent: this._s(this.text) } }); }, staticRenderFns: [] }, void 0, { name: 'VBadge', props: { type: { type: String, default: 'default', validator(e) { return ['default', 'primary', 'alternative', 'warning', 'success', 'danger'].indexOf(e) > -1; } }, align: { type: String, default: 'middle', validator(e) { return ['top', 'middle', 'bottom'].indexOf(e) > -1; } }, text: { type: [String, Number], required: !0 } }, computed: { classes() { return [`badge--${this.type}`, `badge--align-${this.align}`]; } } }, void 0, !1, void 0, void 0, void 0); a.install = function (e) { e.component('VBadge', a); }; const n = e({ render() { const e = this; const t = e.$createElement; const i = e._self._c || t; return i('button', { staticClass: 'button', class: e.classes, attrs: { disabled: e.disabled, type: e.type } }, [e._t('default'), e._v(' '), e.$slots.icon ? i('div', { staticClass: 'button__icon' }, [e._t('icon')], 2) : e._e()], 2); }, staticRenderFns: [] }, void 0, {
  name: 'VButton',
  props: {
    type: { type: String, default: 'button' }, appearance: { type: String, default: 'default', validator(e) { return ['default', 'primary', 'alternative', 'subtle', 'success', 'danger'].indexOf(e) > -1; } }, size: { type: String, default: '3', validator(e) { return ['0', '1', '2', '3', '4'].indexOf(e) > -1; } }, loading: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, iconFirst: { type: Boolean, default: !1 },
  },
  computed: { classes() { return [`button--${this.appearance}`, `button--size-${this.size}`, { 'button--loading': this.loading }, { 'button--icon-first': this.iconFirst }]; } },
}, void 0, !1, void 0, void 0, void 0); function s(e) { return e !== null && typeof e === 'object'; } function r(e, t) { return e == t || !(!s(e) || !s(t)) && JSON.stringify(e) === JSON.stringify(t); } function o(e, t) { for (let i = 0; i < e.length; i++) if (r(e[i], t)) return i; return -1; }n.install = function (e) { e.component('VButton', n); }; const l = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('label', { staticClass: 'checkbox', class: { 'checkbox--indeterminate': e.indeterminate }, attrs: { for: e.id } }, [i('input', {
      ref: 'input',
      staticClass: 'checkbox__input',
      attrs: {
        id: e.id, name: e.name, disabled: e.disabled, tabindex: e.tabindex, type: 'checkbox',
      },
      domProps: { checked: e.isChecked, value: e.submittedValue },
      on: { blur: e.onBlur, focus: e.onFocus, change: e.onChange },
    }), e._v(' '), i('span', { staticClass: 'checkbox__mark' }), e._v(' '), i('span', { staticClass: 'checkbox__text', domProps: { textContent: e._s(e.label) } })]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VCheckbox',
  props: {
    id: { type: [String, Number] }, name: { type: String }, label: { type: [String, Number], required: !0 }, value: { required: !0 }, submittedValue: { type: String, default: 'on' }, checked: { type: Boolean, default: !1 }, trueValue: { default: !0 }, falseValue: { default: !1 }, indeterminate: { type: Boolean, default: !1 }, tabindex: [String, Number], disabled: { type: Boolean, default: !1 },
  },
  data() { return { isChecked: r(this.value, this.trueValue) || this.checked }; },
  created() { this.$emit('input', this.isChecked ? this.trueValue : this.falseValue); },
  methods: {
    onFocus(e) { this.$emit('focus', e); }, onBlur(e) { this.$emit('blur', e); }, onChange(e) { const t = this.isChecked; const i = e.target.checked; this.$emit('input', i ? this.trueValue : this.falseValue, e), t !== i && this.$emit('change', i ? this.trueValue : this.falseValue, e); }, focus() { this.$refs.input.focus(); },
  },
  watch: { value() { this.isChecked = r(this.value, this.trueValue); } },
}, void 0, !1, void 0, void 0, void 0); l.install = function (e) { e.component('VCheckbox', l); }; const u = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'checkbox-group' }, [i('div', { staticClass: 'checkbox-group__label' }, [e._v(e._s(e.label))]), e._v(' '), i('div', { staticClass: 'checkbox-group__list' }, e._l(e.options, (t, a) => i('div', { key: t[e.keys.id] || `${e.name}-${a}`, staticClass: 'checkbox-group__item' }, [i('v-checkbox', {
      key: t[e.keys.id],
      attrs: {
        id: t[e.keys.id] || `${e.name || t[e.keys.name]}-${a}`, checked: e.isOptionCheckedByDefault(t), disabled: e.disabled || t[e.keys.disabled], name: e.name || t[e.keys.name], label: t[e.keys.label] || t,
      },
      on: { blur: e.onBlur, change(i) { return e.onChange(arguments, t); }, focus: e.onFocus },
      model: { value: e.checkboxValues[a], callback(t) { e.$set(e.checkboxValues, a, t); }, expression: 'checkboxValues[i]' },
    })], 1)), 0)]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VCheckboxGroup',
  props: {
    name: { type: String },
    options: { type: Array, required: !0 },
    value: { type: Array, required: !0 },
    keys: {
      type: Object,
      default() {
        return {
          id: 'id', name: 'name', label: 'label', value: 'value', disabled: 'disabled',
        };
      },
    },
    label: { type: String },
    disabled: { type: Boolean, default: !1 },
  },
  data() { return { ignoreChange: !1, checkboxValues: [], initialValue: JSON.parse(JSON.stringify(this.value)) }; },
  methods: {
    reset() { const e = this; this.ignoreChange = !0, this.options.forEach((t, i) => { e.checkboxValues[i] = e.isOptionCheckedByDefault(t); }), this.ignoreChange = !1, this.$emit('input', this.initialValue.length > 0 ? [].concat(this.initialValue) : []); }, isOptionCheckedByDefault(e) { return o(this.initialValue, e[this.keys.value] || e) > -1; }, onFocus(e) { this.isActive = !0, this.$emit('focus', e); }, onBlur(e) { this.isActive = !1, this.$emit('blur', e); }, onChange(e, t) { if (!this.ignoreChange) { const i = e[0]; const a = e[1]; let n = []; const s = t[this.keys.value] || t; const r = o(this.value, s); i && r < 0 && (n = this.value.concat(s)), !i && r > -1 && (n = this.value.slice(0, r).concat(this.value.slice(r + 1))), this.$emit('input', n), this.$emit('change', n, a); } },
  },
  components: { VCheckbox: l },
}, void 0, !1, void 0, void 0, void 0); u.install = function (e) { e.component('VCheckboxGroup', u); }; const d = e({
  render() {
    const e = this.$createElement; const t = this._self._c || e; return t('div', { staticClass: 'progress', class: this.classes }, [this.type === 'determinate' ? t('div', {
      staticClass: 'progress__bar',
      style: { width: `${this.moderatedProgress}%` },
      attrs: {
        role: 'progressbar', 'aria-valuemax': 100, 'aria-valuemin': 0, 'aria-valuenow': this.moderatedProgress,
      },
    }) : t('div', { staticClass: 'progress__bar', attrs: { role: 'progressbar', 'aria-valuemax': 100, 'aria-valuemin': 0 } })]);
  },
  staticRenderFns: [],
}, void 0, { name: 'VProgress', props: { type: { type: String, default: 'indeterminate', validator(e) { return ['indeterminate', 'determinate'].indexOf(e) > -1; } }, progress: { type: Number, default: 0 } }, computed: { classes() { return [`progress--${this.type}`]; }, moderatedProgress() { return this.progress < 0 ? 0 : this.progress > 100 ? 100 : this.progress; } } }, void 0, !1, void 0, void 0, void 0); d.install = function (e) { e.component('VProgress', d); }; const c = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('label', { staticClass: 'radio', attrs: { for: e.id } }, [i('input', {
      staticClass: 'radio__input',
      attrs: {
        type: 'radio', id: e.id, disabled: e.disabled, name: e.name, tabindex: e.tabindex,
      },
      domProps: { checked: e.checked, value: e.trueValue },
      on: { blur: e.onBlur, change: e.onChange, focus: e.onFocus },
    }), e._v(' '), i('span', { staticClass: 'radio__circle' }), e._v(' '), i('span', { staticClass: 'radio__text' }, [e._v(e._s(e.label))])]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VRadio',
  props: {
    id: { type: [String, Number] }, name: { type: String, required: !0 }, label: { type: String, required: !0 }, tabindex: { type: [String, Number] }, value: { type: [Number, String], required: !0 }, trueValue: { type: [Number, String], required: !0 }, checked: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 },
  },
  created() { this.checked && this.$emit('input', this.trueValue); },
  computed: { isChecked() { return String(this.value).length > 0 && this.value == this.trueValue; } },
  methods: {
    onFocus(e) { this.isActive = !0, this.$emit('focus', e); }, onBlur(e) { this.isActive = !1, this.$emit('blur', e); }, onChange(e) { this.disabled || this.$emit('input', this.trueValue), this.$emit('change', this.isChecked, e); }, focus() { this.$refs.input.focus(); },
  },
}, void 0, !1, void 0, void 0, void 0); c.install = function (e) { e.component('VRadio', c); }; const h = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'radio-group' }, [i('div', { staticClass: 'radio-group__label' }, [e._v(e._s(e.label))]), e._v(' '), i('div', { staticClass: 'radio-group__list' }, e._l(e.options, (t, a) => i('div', { key: t[e.keys.id] || `${e.name}-${a}`, staticClass: 'radio-group__item' }, [i('VRadio', {
      key: t[e.keys.id],
      attrs: {
        id: t[e.keys.id] || `${e.name}-${a}`, label: t[e.keys.label] || t, checked: e.isOptionCheckedByDefault(t), disabled: e.disabled || t[e.keys.disabled], name: e.name, tabindex: e.tabindex, 'true-value': t[e.keys.value] || t,
      },
      on: { blur: e.onBlur, focus: e.onFocus },
      model: { value: e.selectedOptionValue, callback(t) { e.selectedOptionValue = t; }, expression: 'selectedOptionValue' },
    })], 1)), 0)]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VRadioGroup',
  props: {
    name: { type: String, required: !0 },
    tabindex: { type: [String, Number] },
    label: { type: String },
    options: { type: Array, required: !0 },
    value: { type: [Number, String], required: !0 },
    keys: {
      type: Object,
      default() {
        return {
          id: 'id', label: 'label', value: 'value', checked: 'checked', disabled: 'disabled',
        };
      },
    },
    disabled: { type: Boolean, default: !1 },
  },
  data() { return { initialValue: this.value, selectedOptionValue: this.value }; },
  methods: {
    reset() { this.$emit('input', this.initialValue); }, isOptionCheckedByDefault(e) { return this.initialValue == e[this.keys.value] || this.initialValue == e || e[this.keys.checked]; }, onFocus(e) { this.$emit('focus', e); }, onBlur(e) { this.$emit('blur', e); },
  },
  watch: { selectedOptionValue() { this.$emit('input', this.selectedOptionValue), this.$emit('change', this.selectedOptionValue); }, value() { this.selectedOptionValue = this.value; } },
  components: { VRadio: c },
}, void 0, !1, void 0, void 0, void 0); h.install = function (e) { e.component('VRadio', h); }; const f = e({ render() { const e = this.$createElement; return (this._self._c || e)('div', { staticClass: 'spinner', class: this.classes }); }, staticRenderFns: [] }, void 0, { name: 'VSpinner', props: { appearance: { type: String, default: 'default' } }, computed: { classes() { return [`spinner--${this.appearance}`]; } } }, void 0, !1, void 0, void 0, void 0); f.install = function (e) { e.component('VSpinner', f); }; for (var p = [], v = 0; v < 256; v++)p[v] = (v < 16 ? '0' : '') + v.toString(16); const b = function () { const e = 4294967295 * Math.random() | 0; const t = 4294967295 * Math.random() | 0; const i = 4294967295 * Math.random() | 0; const a = 4294967295 * Math.random() | 0; return `${p[255 & e] + p[e >> 8 & 255] + p[e >> 16 & 255] + p[e >> 24 & 255]}-${p[255 & t]}${p[t >> 8 & 255]}-${p[t >> 16 & 15 | 64]}${p[t >> 24 & 255]}-${p[63 & i | 128]}${p[i >> 8 & 255]}-${p[i >> 16 & 255]}${p[i >> 24 & 255]}${p[255 & a]}${p[a >> 8 & 255]}${p[a >> 16 & 255]}${p[a >> 24 & 255]}`; }; const m = function (e) { return (e = e || '') + b().split('-')[0]; }; const y = e({
  render() {
    const e = this.$createElement; return (this._self._c || e)('div', {
      staticClass: 'tab',
      class: { 'tab--active': this.isActive, 'tab--disabled': this.disabled },
      attrs: {
        role: 'tabpanel', id: this.id, 'aria-hidden': this.isActive ? null : 'true', tabindex: this.isActive ? '0' : null,
      },
    }, [this._t('default')], 2);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VTab',
  props: {
    id: { type: String, default() { return m('tab-'); } }, title: String, selected: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 },
  },
  data() { return { isActive: !1 }; },
  created() { this.$parent.addTab(this); },
  beforeDestroy() { this.$parent.removeTab(this); },
  methods: { activate() { this.isActive = !0, this.$emit('select', this.id); }, deactivate() { this.isActive = !1, this.$emit('deselect', this.id); } },
  watch: { disabled() { this.$parent.onTabDisabledChange(this); } },
}, void 0, !1, void 0, void 0, void 0); y.install = function (e) { e.component('VTab', y); }; const g = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('li', {
      staticClass: 'tabs__item',
      attrs: {
        role: 'tab', 'aria-controls': e.id, 'aria-selected': e.active ? 'true' : null, tabindex: e.active ? 0 : -1,
      },
    }, [i('a', {
      staticClass: 'tabs__link', class: e.classes, attrs: { href: '#' }, on: { click: e.onClick },
    }, [i('div', { staticClass: 'tabs__link-text' }, [e._v(e._s(e.title))])])]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VTabHeader',
  props: {
    id: { type: String, required: !0 }, title: { type: String, required: !0 }, active: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 },
  },
  computed: { classes() { return [{ 'tabs__link--active': this.active }, { 'tabs__link--disabled': this.disabled }]; } },
  methods: { onClick(e) { e.preventDefault(), this.$emit('click', e); } },
}, void 0, !1, void 0, void 0, void 0); g.install = function (e) { e.component('VTabHeader', g); }; const _ = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'tabs', class: e.classes }, [i('ul', { staticClass: 'tabs__list', attrs: { role: 'tablist' } }, e._l(e.tabs, t => i('v-tab-header', {
      key: t.id,
      ref: 'tabHeaders',
      refInFor: !0,
      attrs: {
        active: e.activeTabId === t.id, disabled: t.disabled, id: t.id, title: t.title,
      },
      on: { click(i) { return e.selectTab(t); } },
      nativeOn: { keydown: [function (t) { return !t.type.indexOf('key') && e._k(t.keyCode, 'left', 37, t.key, ['Left', 'ArrowLeft']) ? null : 'button' in t && t.button !== 0 ? null : e.selectPreviousTab(t); }, function (t) { return !t.type.indexOf('key') && e._k(t.keyCode, 'right', 39, t.key, ['Right', 'ArrowRight']) ? null : 'button' in t && t.button !== 2 ? null : e.selectNextTab(t); }] },
    })), 1), e._v(' '), i('div', { staticClass: 'tabs__body' }, [e._t('default')], 2)]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VTabs',
  props: { wide: { type: Boolean, default: !1 } },
  data() { return { tabs: [], activeTabId: null, activeTabIndex: -1 }; },
  computed: { classes() { return [{ 'tabs--wide': this.wide }]; } },
  methods: {
    addTab(e) { this.tabs.push(e), (this.activeTabId === null || e.selected) && (this.activeTabId = e.id); }, removeTab(e) { const t = this.tabs.indexOf(e); t > -1 && (this.tabs.splice(t, 1), e.id === this.activeTabId && this.selectTab(this.findNearestTab())); }, onTabDisabledChange(e) { e.disabled && this.activeTabId === e.id && this.selectTab(this.findNearestTab()); }, selectTab(e) { e === null || e.disabled || e.id === this.activeTabId || (this.activeTabId = e.id, this.$emit('tab-change', e.id)); }, selectNextTab() { const e = this.findNextTab(); e && (this.selectTab(e), e.$el.focus()); }, selectPreviousTab() { const e = this.findPreviousTab(); e && (this.selectTab(e), e.$el.focus()); }, findNextTab() { for (var e = null, t = this.activeTabIndex + 1; t < this.$refs.tabHeaders.length; t++) if (this.$refs.tabHeaders[t] && !this.$refs.tabHeaders[t].disabled) { e = this.$refs.tabHeaders[t]; break; } return e; }, findPreviousTab() { for (var e = null, t = this.activeTabIndex - 1; t >= 0; t--) if (this.$refs.tabHeaders[t] && !this.$refs.tabHeaders[t].disabled) { e = this.$refs.tabHeaders[t]; break; } return e; }, findNearestTab() { return this.findPreviousTab() || this.findNextTab(); }, findTabById(e) { for (let t = 0; t < this.$refs.tabHeaders.length; t++) if (e === this.$refs.tabHeaders[t].id) return this.$refs.tabHeaders[t]; return null; }, setActiveTab(e) { const t = this.findTabById(e); t && !t.disabled && this.selectTab(t); },
  },
  components: { VTabHeader: g },
  watch: { activeTabId() { const e = this; this.tabs.forEach((t, i) => { e.activeTabId === t.id ? (t.activate(), e.activeTabIndex = i) : t.isActive && t.deactivate(); }); } },
}, void 0, !1, void 0, void 0, void 0); _.install = function (e) { e.component('VTabs', _); }; const x = e({
  render() {
    const e = this; const t = e.$createElement; const i = e._self._c || t; return i('div', { staticClass: 'textbox' }, [i('label', { staticClass: 'textbox__label', attrs: { for: e.id } }, [e._v(e._s(e.label))]), e._v(' '), e.multiline ? i('textarea', {
      directives: [{
        name: 'autofocus', rawName: 'v-autofocus', value: e.autofocus, expression: 'autofocus',
      }],
      ref: 'textarea',
      staticClass: 'textbox__textarea',
      attrs: {
        autocomplete: e.autocomplete ? e.autocomplete : null, maxlength: e.maxlength ? e.maxlength : null, disabled: e.disabled, readonly: e.readonly, placeholder: e.placeholder, name: e.name, id: e.id, rows: e.rows, tabindex: e.tabindex,
      },
      domProps: { value: e.value },
      on: {
        blur: e.onBlur, change: e.onChange, focus: e.onFocus, input(t) { return e.updateValue(t.target.value); }, keydown: [function (t) { return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ? null : e.onKeydownEnter(t); }, e.onKeydown],
      },
    }) : i('input', {
      directives: [{
        name: 'autofocus', rawName: 'v-autofocus', value: e.autofocus, expression: 'autofocus',
      }],
      ref: 'input',
      staticClass: 'textbox__input',
      attrs: {
        autocomplete: e.autocomplete ? e.autocomplete : null, disabled: e.disabled, readonly: e.readonly, placeholder: e.placeholder, name: e.name, id: e.id, tabindex: e.tabindex, max: e.maxValue, maxlength: e.maxlength ? e.maxlength : null, min: e.minValue, number: e.type === 'number' || null, step: e.stepValue, type: e.type,
      },
      domProps: { value: e.value },
      on: {
        blur: e.onBlur, change: e.onChange, focus: e.onFocus, input(t) { return e.updateValue(t.target.value); }, keydown: [function (t) { return !t.type.indexOf('key') && e._k(t.keyCode, 'enter', 13, t.key, 'Enter') ? null : e.onKeydownEnter(t); }, e.onKeydown],
      },
    })]);
  },
  staticRenderFns: [],
}, void 0, {
  name: 'VTextbox',
  directives: { autofocus: { inserted(e, t) { t.value && e.focus(); } } },
  props: {
    id: { type: [String, Number], required: !0 }, name: { type: String, required: !0 }, label: { type: String, required: !0 }, value: { type: [String, Number], default: '' }, type: { type: String, default: 'text' }, placeholder: { type: String }, tabindex: [String, Number], multiline: { type: Boolean, default: !1 }, rows: { type: Number, default: 2 }, min: Number, max: Number, step: { type: String, default: 'any' }, maxlength: Number, readonly: { type: Boolean, default: !1 }, disabled: { type: Boolean, default: !1 }, autocomplete: String, autofocus: { type: Boolean, default: !1 },
  },
  computed: { minValue() { return this.type === 'number' && void 0 !== this.min ? this.min : null; }, maxValue() { return this.type === 'number' && void 0 !== this.max ? this.max : null; }, stepValue() { return this.type === 'number' ? this.step : null; } },
  data() { return { isTouched: !1, initialValue: this.value }; },
  created() { this.value === null && (this.initialValue = '', this.updateValue('')); },
  methods: {
    updateValue(e) { this.$emit('input', e); }, onChange(e) { this.$emit('change', this.value, e); }, onFocus(e) { this.$emit('focus', e); }, onBlur(e) { this.$emit('blur', e), this.isTouched || (this.isTouched = !0, this.$emit('touch')); }, onKeydown(e) { this.$emit('keydown', e); }, onKeydownEnter(e) { this.$emit('keydown-enter', e); }, reset() { document.activeElement !== this.$refs.input && document.activeElement !== this.$refs.textarea || document.activeElement.blur(), this.updateValue(this.initialValue), this.resetTouched(); }, resetTouched(e) { void 0 === e && (e = { touched: !1 }), this.isTouched = e.touched; }, focus() { (this.$refs.input || this.$refs.textarea).focus(); },
  },
}, void 0, !1, void 0, void 0, void 0); x.install = function (e) { e.component('VTextbox', x); }; const V = Object.freeze({
  VAlert: t, VAvatar: i, VBadge: a, VButton: n, VCheckbox: l, VCheckboxGroup: u, VProgress: d, VRadio: c, VRadioGroup: h, VSpinner: f, VTab: y, VTabs: _, VTextbox: x,
}); const k = { install: function e(t) { e.installed || (e.installed = !0, Object.keys(V).forEach((e) => { t.component(e, V[e]); })); } }; let C = null; typeof window !== 'undefined' ? C = window.Vue : typeof global !== 'undefined' && (C = global.Vue), C && C.use(k); export default k; export {
  t as VAlert, i as VAvatar, a as VBadge, n as VButton, l as VCheckbox, u as VCheckboxGroup, d as VProgress, c as VRadio, h as VRadioGroup, f as VSpinner, y as VTab, _ as VTabs, x as VTextbox,
};
