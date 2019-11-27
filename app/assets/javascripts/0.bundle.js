(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./frontend/components/profile/profile.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/profile/profile.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nav_bar_nav_bar_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav_bar/nav_bar_container */ "./frontend/components/nav_bar/nav_bar_container.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _post_form_post_form_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../post_form/post_form_container */ "./frontend/components/post_form/post_form_container.js");








 // import ProfilePostItem from './profile_post_item';



var Profile =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Profile, _React$Component);

  function Profile(props) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Profile);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Profile).call(this, props));
    _this.state = {
      posts: {},
      profilePhoto: null
    };
    _this.renderPost = _this.renderPost.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this)); // this.updateProPic = this.updateProPic.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.fileHandler = this.fileHandler.bind(this);

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Profile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchUser(this.props.match.params.id);
      this.props.fetchAllPosts();
    }
  }, {
    key: "renderPost",
    value: function renderPost() {
      var _this2 = this;

      return Object.values(this.props.posts).reverse().map(function (post, idx) {
        if (post === undefined) return;

        if (post.user_id === _this2.props.user.id) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
            className: "profile-post-item"
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
            key: idx,
            src: post.photoUrl
          }));
        } else {
          return "";
        }
      });
    } // fileHandler(event) {
    //   const file = event.target.files[0];
    //   const fileReader = new FileReader();
    //   fileReader.onloadend = () => {
    //     this.setState({ photo: file, preview: fileReader.result });
    //   };
    //   if (file) {
    //     fileReader.readAsDataURL(file);
    //   }
    // }
    // handleSubmit(event) {
    //   event.preventDefault();
    //   let button = event.target;
    //   let parent = button.parentElement;
    //   let loader = document.createElement('p');
    //   loader.innerText = 'posting';
    //   loader.classList.add('dummy-submit-button');
    //   parent.removeChild(button);
    //   parent.appendChild(loader);
    //   const formData = new FormData();
    //   // const filledForm = append(formData, { 'post[location]': this.state.location} );
    //   formData.append('user[profilePhoto]', this.state.profilePhoto);
    //   this.props.action(formData)
    //     .then(() => {
    //       this.setState({
    //         profilePhoto: null,
    //         preview: null
    //       });
    //       document.getElementById('postform').className = 'hide';
    //     });
    // }
    // fileUploadHandler() {
    //   this.handleSubmit()
    // }
    // updateProPic() {
    //   return <label onClick={this.fileUploadHandler}>
    //           <p>Upload</p>
    //           <input type="file"
    //             accept="image/*"
    //             onChange={this.fileHandler} />
    //         </label>
    // }

  }, {
    key: "render",
    value: function render() {
      var user = this.props.user;
      if (user) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_nav_bar_nav_bar_container__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        className: "profile-header"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        className: "pro-pic",
        src: this.props.user.profilePhoto
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "pro-user-info"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        className: "pro-username"
      }, user.username), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", null, user.postIds.length), " posts"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, user.bio))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "profile-posts"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "profile-menu"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "posts"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "POSTS"))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "posts-grid"
      }, this.renderPost())), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_post_form_post_form_container__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "footer"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://github.com/stanbond"
      }, "GITHUB"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/stanbondarenko/"
      }, "LINKEDIN"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "2019 PICTURESQUE")));
    }
  }]);

  return Profile;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Profile));

/***/ }),

/***/ "./frontend/components/profile/profile_container.js":
/*!**********************************************************!*\
  !*** ./frontend/components/profile/profile_container.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/user_actions */ "./frontend/actions/user_actions.js");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile */ "./frontend/components/profile/profile.jsx");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/post_actions */ "./frontend/actions/post_actions.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  var user = state.entities.users[ownProps.match.params.id];
  var posts = state.entities.posts; // console.log(state);

  if (user) {
    posts = user.postIds.map(function (id) {
      return state.entities.posts[id];
    });
  } else {
    posts = [];
  }

  return {
    user: user,
    posts: posts
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUser: function fetchUser(id) {
      return dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["fetchUser"])(id));
    },
    fetchAllPosts: function fetchAllPosts() {
      return dispatch(Object(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllPosts"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(_profile__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ })

}]);
//# sourceMappingURL=0.bundle.js.map