import Utils from '../utils/utils';
import Mixins from '../utils/mixins';
import __vueComponentProps from '../runtime-helpers/vue-component-props.js';
export default {
  name: 'f7-block-title',
  props: {
    id: [
      String,
      Number
    ],
    ...Mixins.colorProps
  },
  render() {
    const _h = this.$createElement;
    const props = this.props;
    const {className, id, style} = props;
    const classes = Utils.classNames(className, 'block-title', Mixins.colorClasses(props));
    return _h('div', {
      style: style,
      class: classes,
      attrs: { id: id }
    }, [this.$slots['default']]);
  },
  computed: {
    props() {
      return __vueComponentProps(this);
    }
  }
};