"use strict";(self.webpackChunknext_components=self.webpackChunknext_components||[]).push([[2911],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_require__.d(__webpack_exports__,{Z:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_slicedToArray});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_toConsumableArray});var arrayLikeToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return(0,arrayLikeToArray.Z)(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||(0,unsupportedIterableToArray.Z)(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.Z)(o,minLen):void 0}}},"./src/stories/richText/tagsArea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TagAreaDefault:()=>TagAreaDefault,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TagAreaDefault$param,_TagAreaDefault$param2,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_component_richText_tagsArea__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/richText/tagsArea.tsx"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/next-dnd-list/hook.ts"),_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/component/next-dnd-list/dndListHook.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function StoryTagsArea(){var _useFilterNSort=(0,_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__.K)(),filterState=_useFilterNSort.filterState,filterDispatch=_useFilterNSort.filterDispatch,_useDndList=(0,_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__.K)(),dndListState=_useDndList.dndListState,dndListDispatch=_useDndList.dndListDispatch;return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){dndListDispatch({type:"create-item",payload:{content:"Hello World"}})}),[dndListDispatch]),__jsx(_component_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_3__.n.Provider,{value:{filterState,filterDispatch}},__jsx(_component_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_4__.o.Provider,{value:{dndListState,dndListDispatch}},__jsx(_component_richText_tagsArea__WEBPACK_IMPORTED_MODULE_2__.r,{index:0})))}StoryTagsArea.displayName="StoryTagsArea";const __WEBPACK_DEFAULT_EXPORT__={title:"UI/Input/tagsArea",component:StoryTagsArea,tags:["autodocs"],parameters:{layout:"padded"}};var TagAreaDefault={args:{}};TagAreaDefault.parameters=_objectSpread(_objectSpread({},TagAreaDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TagAreaDefault$param=TagAreaDefault.parameters)||void 0===_TagAreaDefault$param?void 0:_TagAreaDefault$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_TagAreaDefault$param2=TagAreaDefault.parameters)||void 0===_TagAreaDefault$param2||null===(_TagAreaDefault$param2=_TagAreaDefault$param2.docs)||void 0===_TagAreaDefault$param2?void 0:_TagAreaDefault$param2.source)})})},"./src/component/badge/badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>Badge,m:()=>getRandomColor});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_excluded=["actual","isRemoved"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,getRandomColor=function getRandomColor(){var colors=["blue","dark","red","green","yellow","indigo","purple","pink"];return colors[Math.floor(Math.random()*colors.length)]};function Badge(_ref){var actual=_ref.actual,_ref$isRemoved=_ref.isRemoved,isRemoved=void 0!==_ref$isRemoved&&_ref$isRemoved,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded),content=actual.length>7?"".concat(actual.slice(0,7),"..."):actual;switch(props.color){case"blue":return isRemoved?__jsx("span",{id:"badge-dismiss-default",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-900 dark:text-blue-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300","data-dismiss-target":"#badge-dismiss-default","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"},content);case"dark":return isRemoved?__jsx("span",{id:"badge-dismiss-dark",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300","data-dismiss-target":"#badge-dismiss-dark","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"},content);case"red":return isRemoved?__jsx("span",{id:"badge-dismiss-red",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-red-800 bg-red-100 rounded dark:bg-red-900 dark:text-red-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-red-400 bg-transparent rounded-sm hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300","data-dismiss-target":"#badge-dismiss-red","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-red-100 text-red-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"},content);case"green":return isRemoved?__jsx("span",{id:"badge-dismiss-green",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300","data-dismiss-target":"#badge-dismiss-green","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"},content);case"yellow":return isRemoved?__jsx("span",{id:"badge-dismiss-yellow",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-yellow-800 bg-yellow-100 rounded dark:bg-yellow-900 dark:text-yellow-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-yellow-400 bg-transparent rounded-sm hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300","data-dismiss-target":"#badge-dismiss-yellow","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"},content);case"indigo":return isRemoved?__jsx("span",{id:"badge-dismiss-indigo",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300","data-dismiss-target":"#badge-dismiss-indigo","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"},content);case"purple":return isRemoved?__jsx("span",{id:"badge-dismiss-purple",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-purple-800 bg-purple-100 rounded dark:bg-purple-900 dark:text-purple-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-purple-400 bg-transparent rounded-sm hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300","data-dismiss-target":"#badge-dismiss-purple","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300"},content);default:return isRemoved?__jsx("span",{id:"badge-dismiss-pink",className:"inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-pink-800 bg-pink-100 rounded dark:bg-pink-900 dark:text-pink-300"},content,__jsx("button",{type:"button",className:"inline-flex items-center p-1 ml-2 text-sm text-pink-400 bg-transparent rounded-sm hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300","data-dismiss-target":"#badge-dismiss-pink","aria-label":"Remove",onClick:function onClick(){props.removeHandler&&props.removeHandler(content)}},__jsx("svg",{className:"w-2 h-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 14"},__jsx("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"})),__jsx("span",{className:"sr-only"},"Remove badge"))):__jsx("span",{className:"bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300"},content)}}Badge.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{isRemoved:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:"isRemoved"},actual:{required:!0,tsType:{name:"string"},description:"content"},color:{required:!0,tsType:{name:"union",raw:'| "blue"\n| "dark"\n| "red"\n| "green"\n| "yellow"\n| "indigo"\n| "purple"\n| "pink"',elements:[{name:"literal",value:'"blue"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"red"'},{name:"literal",value:'"green"'},{name:"literal",value:'"yellow"'},{name:"literal",value:'"indigo"'},{name:"literal",value:'"purple"'},{name:"literal",value:'"pink"'}]},description:"color"},removeHandler:{required:!1,tsType:{name:"signature",type:"function",raw:"(str: string) => void",signature:{arguments:[{name:"str",type:{name:"string"}}],return:{name:"void"}}},description:"handler"}}};try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{actual:{defaultValue:null,description:"content",name:"actual",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"color",name:"color",required:!0,type:{name:"enum",value:[{value:'"blue"'},{value:'"dark"'},{value:'"red"'},{value:'"green"'},{value:'"yellow"'},{value:'"indigo"'},{value:'"purple"'},{value:'"pink"'}]}},isRemoved:{defaultValue:{value:"false"},description:"isRemoved",name:"isRemoved",required:!1,type:{name:"boolean"}},removeHandler:{defaultValue:null,description:"handler",name:"removeHandler",required:!1,type:{name:"((str: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/badge/badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"src/component/badge/badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/component/next-dnd-list/dndListHook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useDndList,o:()=>DndListContext});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function useDndList(){var _React$useReducer=react__WEBPACK_IMPORTED_MODULE_1__.useReducer((function dndReducer(state,action){var _x,_y;switch(action.type){case"create-item":return _objectSpread(_objectSpread({},state),{},{list:[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list),[{selectedTags:[],due:new Date,content:action.payload.content,completed:!1,position:{x:null!==(_x=action.payload.x)&&void 0!==_x?_x:0,y:null!==(_y=action.payload.y)&&void 0!==_y?_y:0},offset:{x:0,y:0},active:!1}])});case"delete-item":var deepCopyList=JSON.parse(JSON.stringify(state.list));return _objectSpread(_objectSpread({},state),{},{list:deepCopyList.filter((function(_,i){return i!==action.payload.index}))});case"set-item-tags":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{selectedTags:action.payload.tags}):el}))});case"set-item-due":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{due:action.payload.due}):el}))});case"set-item-content":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{content:action.payload.content}):el}))});case"set-item-completed":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{completed:action.payload.completed}):el}))});case"set-item-position":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{position:{x:action.payload.x,y:action.payload.y}}):el}))});case"set-item-offset":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{offset:{x:action.payload.x,y:action.payload.y}}):el}))});case"set-item-active":return _objectSpread(_objectSpread({},state),{},{list:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list).map((function(el,index){return index===action.payload.index?_objectSpread(_objectSpread({},el),{},{active:action.payload.active}):el}))});case"set-init-dragged":return _objectSpread(_objectSpread({},state),{},{dragged:action.payload,dropped:-1,lastDragged:-1});case"set-dropped":return _objectSpread(_objectSpread({},state),{},{dropped:action.payload});case"sort-list":var temp=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_2__.Z)(state.list),payload=action.payload,choose=temp.splice(payload.from,1);return temp.splice(payload.to,0,choose[0]),console.log(choose),console.log(temp),_objectSpread(_objectSpread({},state),{},{list:temp,dragged:state.dropped,lastDragged:state.dragged});default:return state}}),{list:[],dragged:-1,dropped:-1,lastDragged:-1}),_React$useReducer2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_React$useReducer,2),dndListState=_React$useReducer2[0],dndListDispatch=_React$useReducer2[1];return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){dndListState.dragged!==dndListState.dropped&&dndListState.dropped>-1&&(console.log(dndListState.dropped,dndListState.dragged),dndListDispatch({type:"sort-list",payload:{from:dndListState.dropped,to:dndListState.dragged}}))}),[dndListState.dragged,dndListState.dropped]),react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){console.log(dndListState)}),[dndListState]),{dndListState,dndListDispatch}}var DndListContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null)},"./src/component/next-dnd-list/hook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>useFilterNSort,n:()=>FilterNSortContext});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_badge_badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/badge/badge.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function useFilterNSort(){var _React$useReducer=react__WEBPACK_IMPORTED_MODULE_1__.useReducer((function inputReducer(state,action){switch(action.type){case"set-category":return _objectSpread(_objectSpread({},state),{},{category:action.payload});case"create-tag":return _objectSpread(_objectSpread({},state),{},{tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags).map((function(el){return el.content})).includes(action.payload)?state.tags:[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags),[{content:action.payload,color:(0,_badge_badge__WEBPACK_IMPORTED_MODULE_2__.m)()}])});case"delete-tag":return _objectSpread(_objectSpread({},state),{},{tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.tags).filter((function(el){return el.content!==action.payload})),filterTags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags).filter((function(el){return el!==action.payload}))});case"select-filter-tags":return _objectSpread(_objectSpread({},state),{},{filterTags:[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags),[action.payload])});case"deselect-filter-tags":return _objectSpread(_objectSpread({},state),{},{filterTags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.filterTags).filter((function(el){return el!==action.payload}))});case"create-select-group":var payloadCreate=action.payload,isExisted=-1!==(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).map((function(el){return el.type})).indexOf(payloadCreate);return _objectSpread(_objectSpread({},state),{},{sort:isExisted?(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort):[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort),[{type:payloadCreate,order:0}])});case"delete-select-group":var payloadDel=action.payload;return _objectSpread(_objectSpread({},state),{},{sort:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).filter((function(_,i){return i!==payloadDel}))});case"update-select-group":var payloadUpdate=action.payload;return _objectSpread(_objectSpread({},state),{},{sort:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__.Z)(state.sort).map((function(el,i){return i===payloadUpdate.index?_objectSpread(_objectSpread({},el),{},(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)({},payloadUpdate.key,payloadUpdate.value)):el}))});default:return state}}),{category:0,tags:[],filterTags:[],sort:[]}),_React$useReducer2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_React$useReducer,2),filterState=_React$useReducer2[0],filterDispatch=_React$useReducer2[1];return react__WEBPACK_IMPORTED_MODULE_1__.useEffect((function(){console.log(filterState)}),[filterState]),{filterState,filterDispatch}}var FilterNSortContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(null)},"./src/component/richText/tagsArea.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>TagsArea});var C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_badge_badge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/component/badge/badge.tsx"),_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/component/next-dnd-list/hook.ts"),_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/component/next-dnd-list/dndListHook.tsx"),console=__webpack_require__("./node_modules/console-browserify/index.js"),_excluded=["index"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function TagsArea(_ref){var _getTags,index=_ref.index,props=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_4__.Z)(_ref,_excluded),filterNSort=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_next_dnd_list_hook__WEBPACK_IMPORTED_MODULE_2__.n),dndList=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_next_dnd_list_dndListHook__WEBPACK_IMPORTED_MODULE_3__.o),inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState2=(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),tag=_React$useState2[0],setTag=_React$useState2[1],getTags=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((function(){var allTags=null==filterNSort?void 0:filterNSort.filterState.tags,indexes=(null==dndList?void 0:dndList.dndListState.list[index])&&(null==dndList?void 0:dndList.dndListState.list[index].selectedTags);return null==allTags?void 0:allTags.filter((function(el){return null==indexes?void 0:indexes.includes(el.content)}))}),[null==filterNSort?void 0:filterNSort.filterState.tags,null==dndList?void 0:dndList.dndListState.list,index]),handleRemove=function handleRemove(content){var _dndList$dndListState3;null==dndList||dndList.dndListDispatch({type:"set-item-tags",payload:{index,tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(null!==(_dndList$dndListState3=null==dndList?void 0:dndList.dndListState.list[index].selectedTags)&&void 0!==_dndList$dndListState3?_dndList$dndListState3:[]).filter((function(el){return el!==content}))}})};return __jsx("div",{className:["flex flex-row flex-wrap justify-start items-center gap-y-2 p-1 border-none w-full max-w-[348px]","bg-gray-200 dark:bg-gray-600 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"].join(" ")},null===(_getTags=getTags())||void 0===_getTags?void 0:_getTags.map((function(el,index){return __jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{key:"tags-area-".concat(index)},__jsx(_badge_badge__WEBPACK_IMPORTED_MODULE_1__.C,{actual:el.content,color:el.color,isRemoved:!0,removeHandler:function removeHandler(){return handleRemove(el.content)}}))})),__jsx("input",{type:"text",ref:inputRef,className:["border-none outline-none focus:border-none focus:outline-none focus:ring-0 flex-1 px-1 py-0 min-w-[100px]","bg-transparent dark:text-white focus:caret-black"].join(" "),value:tag,onChange:function handleChange(evt){setTag(evt.target.value)},onKeyDown:function handleKeyDown(evt){if("Enter"===evt.key){if(console.log(null==dndList?void 0:dndList.dndListState.list[index]),console.log(tag),tag&&null!=dndList&&dndList.dndListState.list[index]){var _dndList$dndListState,selected=null!==(_dndList$dndListState=null==dndList?void 0:dndList.dndListState.list[index].selectedTags)&&void 0!==_dndList$dndListState?_dndList$dndListState:[];null==filterNSort||filterNSort.filterDispatch({type:"create-tag",payload:evt.target.value}),null==dndList||dndList.dndListDispatch({type:"set-item-tags",payload:{index,tags:null!=selected&&selected.includes(evt.target.value)?(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(selected):[].concat((0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(selected),[evt.target.value])}})}setTag("")}else if("Backspace"===evt.key&&null!=dndList&&dndList.dndListState.list[index]){var _dndList$dndListState2;if(!tag||0===tag.length)null==dndList||dndList.dndListDispatch({type:"set-item-tags",payload:{index,tags:(0,C_Users_clark_Documents_codes_aws_influencers_next_components_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(null!==(_dndList$dndListState2=null==dndList?void 0:dndList.dndListState.list[index].selectedTags)&&void 0!==_dndList$dndListState2?_dndList$dndListState2:[]).slice(0,-1)}})}},onFocus:props.handler,placeholder:"Add new tag..."}))}TagsArea.displayName="TagsArea",TagsArea.__docgenInfo={description:"",methods:[],displayName:"TagsArea"};try{TagsArea.displayName="TagsArea",TagsArea.__docgenInfo={description:"",displayName:"TagsArea",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/component/richText/tagsArea.tsx#TagsArea"]={docgenInfo:TagsArea.__docgenInfo,name:"TagsArea",path:"src/component/richText/tagsArea.tsx#TagsArea"})}catch(__react_docgen_typescript_loader_error){}}}]);