(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+yFR":
/*!******************************************************!*\
  !*** ./src/app/movie-by-id/movie-by-id.component.ts ***!
  \******************************************************/
/*! exports provided: MovieByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieByIdComponent", function() { return MovieByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/request-api-genres.service */ "ABp6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_heure_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/heure.pipe */ "cAnv");
/* harmony import */ var _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/note.pipe */ "kXnP");






function MovieByIdComponent_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieByIdComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovieByIdComponent_li_6_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r7 = ctx.$implicit;
    const index_r8 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r7.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r8 !== ctx_r0.movie.genres.length - 1);
} }
function MovieByIdComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "note");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 1, ctx_r1.movie.vote_average, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MovieByIdComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\uD83D\uDED1 Ce film n'est pas destin\u00E9 \u00E0 un jeune public");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovieByIdComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", ctx_r3.movie.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r3.movie.poster_path);
} }
function MovieByIdComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 20);
} }
function MovieByIdComponent_p_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const companie_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](companie_r10.name);
} }
class MovieByIdComponent {
    constructor(requestApiGenresService) {
        this.requestApiGenresService = requestApiGenresService;
        this.isOpen = false;
    }
    ngOnInit() {
        this.requestApiGenresService.findAllGenresMovie().subscribe(x => this.genresMovie = x.genres);
    }
}
MovieByIdComponent.ɵfac = function MovieByIdComponent_Factory(t) { return new (t || MovieByIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_1__["RequestApiGenresService"])); };
MovieByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovieByIdComponent, selectors: [["app-movie-by-id"]], inputs: { movie: "movie" }, decls: 44, vars: 19, consts: [[1, "card-information"], [1, "card-top"], [1, "bold"], [1, "genre-list"], ["class", "regular", 4, "ngFor", "ngForOf"], ["class", "card-note", 3, "innerHtml", 4, "ngIf"], ["class", "regular adult-content", 4, "ngIf"], [1, "card-main-content"], [1, "card-poster"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], [1, "card-description"], [1, "regular"], [1, "card-more-information"], [1, "card-companies-info"], [1, "companies-list"], [4, "ngIf"], [1, "card-note", 3, "innerHtml"], [1, "regular", "adult-content"], [3, "src", "alt"], ["src", "http://www.movienewz.com/img/films/poster-holder.jpg", "alt", "poster-not-available"]], template: function MovieByIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovieByIdComponent_li_6_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovieByIdComponent_div_7_Template, 2, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovieByIdComponent_p_8_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MovieByIdComponent_img_11_Template, 1, 2, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MovieByIdComponent_ng_template_12_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description du film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Dur\u00E9e du film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "heure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date de sortie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Revenus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Production");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, MovieByIdComponent_p_43_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.vote_average);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.adult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movie.poster_path)("ngIfElse", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.movie.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 11, ctx.movie.runtime), " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 13, ctx.movie.release_date, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](37, 16, ctx.movie.revenue, "EU"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.movie.production_companies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_pipes_heure_pipe__WEBPACK_IMPORTED_MODULE_3__["HeurePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_4__["NotePipe"]], styles: [".star-average-five[_ngcontent-%COMP%] {\n  width: 20px;\n}\n\n.star-average-four[_ngcontent-%COMP%] {\n  width: 20px;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\n\n.star-average-tree[_ngcontent-%COMP%] {\n  width: 20px;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);\n}\n\n.star-average-two[_ngcontent-%COMP%] {\n  width: 20px;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 32% 57%, 2% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 32% 57%, 2% 35%, 39% 35%);\n}\n\n.star-average-one[_ngcontent-%COMP%] {\n  width: 20px;\n  -webkit-clip-path: polygon(50% 0%, 61% 35%, 39% 35%);\n          clip-path: polygon(50% 0%, 61% 35%, 39% 35%);\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n\n.genre-list[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #F83745;\n}\n\n.card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.card-main-content[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-more-information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 33%;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin-top: 0;\n}\n\n.adult-content[_ngcontent-%COMP%] {\n  color: #F83745;\n}\n\n.card-companies-info[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.card-companies-info[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin: 0;\n}\n\n@media screen and (max-width: 1024px) {\n  .card-main-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    margin: auto;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 2rem;\n  }\n}\n\n@media screen and (max-width: 648px) {\n  .card-more-information[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vdmllLWJ5LWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHlHQUFBO1VBQUEsaUdBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSx1RkFBQTtVQUFBLCtFQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EscUVBQUE7VUFBQSw2REFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLG9EQUFBO1VBQUEsNENBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUlJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksU0FBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBSUk7RUFDSSxzQkFBQTtFQUNBLFVBQUE7QUFGUjs7QUFJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBRlo7O0FBT0E7RUFDSSxjQUFBO0FBSko7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBTFI7O0FBT1E7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQUxaOztBQVVBO0VBQ0k7SUFDSSxjQUFBO0VBUE47RUFTTTtJQUNJLGFBQUE7RUFQVjtFQVNVO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtFQVBkO0VBV007SUFDSSxlQUFBO0lBQ0EsZ0JBQUE7RUFUVjtBQUNGOztBQWFBO0VBQ0k7SUFDSSxjQUFBO0VBWE47QUFDRiIsImZpbGUiOiJtb3ZpZS1ieS1pZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGFyLWF2ZXJhZ2UtZml2ZXtcclxuICAgIHdpZHRoOjIwcHg7IFxyXG59XHJcblxyXG4uc3Rhci1hdmVyYWdlLWZvdXJ7XHJcbiAgICB3aWR0aDoyMHB4OyBcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDY4JSA1NyUsIDc5JSA5MSUsIDUwJSA3MCUsIDIxJSA5MSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XHJcbn1cclxuXHJcbi5zdGFyLWF2ZXJhZ2UtdHJlZXtcclxuICAgIHdpZHRoOjIwcHg7IFxyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgNjElIDM1JSwgNTAlIDcwJSwgMjElIDkxJSwgMzIlIDU3JSwgMiUgMzUlLCAzOSUgMzUlKTtcclxufVxyXG5cclxuLnN0YXItYXZlcmFnZS10d297XHJcbiAgICB3aWR0aDoyMHB4OyBcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDYxJSAzNSUsIDMyJSA1NyUsIDIlIDM1JSwgMzklIDM1JSk7XHJcbn1cclxuXHJcbi5zdGFyLWF2ZXJhZ2Utb25le1xyXG4gICAgd2lkdGg6MjBweDsgXHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCA2MSUgMzUlLCAzOSUgMzUlKTtcclxufVxyXG5cclxuaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5nZW5yZS1saXN0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG59XHJcblxyXG4uY2FyZC1wb3N0ZXIge1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkLW1vcmUtaW5mb3JtYXRpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG5cclxuICAgICAgICBwLnJlZ3VsYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y4Mzc0NTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZHVsdC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG59XHJcblxyXG4uY2FyZC1jb21wYW5pZXMtaW5mbyB7XHJcbiAgICAuY29tcGFuaWVzLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgcC5yZWd1bGFyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGODM3NDU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmNhcmQtbWFpbi1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgICAgICAgLmNhcmQtcG9zdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjQ4cHgpIHtcclxuICAgIC5jYXJkLW1vcmUtaW5mb3JtYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovieByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-movie-by-id',
                templateUrl: './movie-by-id.component.html',
                styleUrls: ['./movie-by-id.component.scss'],
            }]
    }], function () { return [{ type: _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_1__["RequestApiGenresService"] }]; }, { movie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Dev Lab\MovieSearch\src\main.ts */"zUnb");


/***/ }),

/***/ "0Pu/":
/*!*******************************************!*\
  !*** ./src/app/transitions/open-close.ts ***!
  \*******************************************/
/*! exports provided: OpenCloseTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenCloseTransition", function() { return OpenCloseTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const OpenCloseTransition = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.3, .3, .3)' }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100)
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(100, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale3d(.0, .0, .0)' }))
        ])
    ])
];


/***/ }),

/***/ "220Z":
/*!********************************************************!*\
  !*** ./src/app/services/request-api-people.service.ts ***!
  \********************************************************/
/*! exports provided: RequestApiPeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApiPeopleService", function() { return RequestApiPeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RequestApiPeopleService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3/';
        this.key = '89481d4469f0f699ac04327380e53f95';
    }
    findAllPeopleByKeyword(keyword) {
        return this.http.get(`${this.apiUrl}search/person?api_key=${this.key}&query=${keyword}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allPeople) => allPeople.results));
    }
    findPeopleById(id) {
        return this.http.get(`${this.apiUrl}person/${id}?api_key=${this.key}`);
    }
    getPopularPeople() {
        return this.http.get(`${this.apiUrl}person/popular?api_key=${this.key}&language=fr-FR`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allPeople) => allPeople.results));
    }
}
RequestApiPeopleService.ɵfac = function RequestApiPeopleService_Factory(t) { return new (t || RequestApiPeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RequestApiPeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestApiPeopleService, factory: RequestApiPeopleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestApiPeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ABp6":
/*!********************************************************!*\
  !*** ./src/app/services/request-api-genres.service.ts ***!
  \********************************************************/
/*! exports provided: RequestApiGenresService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApiGenresService", function() { return RequestApiGenresService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RequestApiGenresService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3/';
        this.key = '89481d4469f0f699ac04327380e53f95';
    }
    findAllGenresMovie() {
        return this.http.get(`${this.apiUrl}genre/movie/list?api_key=${this.key}&language=fr-FR`);
    }
    findAllGenresSeries() {
        return this.http.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=89481d4469f0f699ac04327380e53f95`);
    }
}
RequestApiGenresService.ɵfac = function RequestApiGenresService_Factory(t) { return new (t || RequestApiGenresService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestApiGenresService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestApiGenresService, factory: RequestApiGenresService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestApiGenresService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "OZYo":
/*!********************************************************!*\
  !*** ./src/app/people-by-id/people-by-id.component.ts ***!
  \********************************************************/
/*! exports provided: PeopleByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleByIdComponent", function() { return PeopleByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function PeopleByIdComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 13);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", ctx_r0.people.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r0.people.profile_path);
} }
function PeopleByIdComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 14);
} }
function PeopleByIdComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date de naissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 1, ctx_r3.people.birthday, "dd/MM/yyyy"));
} }
function PeopleByIdComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Lieu de naissance");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.people.place_of_birth);
} }
function PeopleByIdComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Date de d\u00E9c\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.people.deathday);
} }
function PeopleByIdComponent_p_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Femme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PeopleByIdComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Homme");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PeopleByIdComponent {
    constructor() { }
    ngOnInit() {
    }
}
PeopleByIdComponent.ɵfac = function PeopleByIdComponent_Factory(t) { return new (t || PeopleByIdComponent)(); };
PeopleByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeopleByIdComponent, selectors: [["app-people-by-id"]], inputs: { people: "people" }, decls: 27, vars: 10, consts: [[1, "card-information"], [1, "card-top"], [1, "bold"], [1, "regular", "actor-department"], [1, "card-main-content"], [1, "card-poster"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], [1, "card-description"], [1, "regular"], [1, "card-more-information"], [4, "ngIf"], ["class", "regular", 4, "ngIf"], [3, "src", "alt"], ["src", "http://www.peoplenewz.com/img/films/poster-holder.jpg", "alt", "poster-not-available"]], template: function PeopleByIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PeopleByIdComponent_img_9_Template, 1, 2, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PeopleByIdComponent_ng_template_10_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Biographie de l'acteur");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PeopleByIdComponent_div_18_Template, 6, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PeopleByIdComponent_div_19_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PeopleByIdComponent_div_20_Template, 5, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Genre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PeopleByIdComponent_p_25_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, PeopleByIdComponent_p_26_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.known_for_department);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.profile_path)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.people.biography);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.birthday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.place_of_birth);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.deathday);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.gender === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.people.gender === 2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n\n.genre-list[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #F83745;\n}\n\n.card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.card-main-content[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-more-information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 33%;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin-top: 0;\n}\n\n.adult-content[_ngcontent-%COMP%] {\n  color: #F83745;\n}\n\n.card-companies-info[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.card-companies-info[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin: 0;\n}\n\n.actor-department[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin: 0;\n}\n\n@media screen and (max-width: 1024px) {\n  .card-main-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    margin: auto;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 2rem;\n  }\n}\n\n@media screen and (max-width: 648px) {\n  .card-more-information[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBlb3BsZS1ieS1pZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsU0FBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUlJO0VBQ0ksWUFBQTtBQURSOztBQUtBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FBRko7O0FBS0E7RUFDSSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksU0FBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRko7O0FBSUk7RUFDSSxzQkFBQTtFQUNBLFVBQUE7QUFGUjs7QUFJUTtFQUNJLGNBQUE7RUFDQSxhQUFBO0FBRlo7O0FBT0E7RUFDSSxjQUFBO0FBSko7O0FBUUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBTFI7O0FBT1E7RUFDSSxjQUFBO0VBQ0EsU0FBQTtBQUxaOztBQVVBO0VBQ0ksY0FBQTtFQUNBLFNBQUE7QUFQSjs7QUFVQTtFQUNJO0lBQ0ksY0FBQTtFQVBOO0VBU007SUFDSSxhQUFBO0VBUFY7RUFTVTtJQUNJLFdBQUE7SUFDQSxnQkFBQTtJQUNBLFlBQUE7RUFQZDtFQVdNO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBVFY7QUFDRjs7QUFhQTtFQUNJO0lBQ0ksY0FBQTtFQVhOO0FBQ0YiLCJmaWxlIjoicGVvcGxlLWJ5LWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5nZW5yZS1saXN0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG59XHJcblxyXG4uY2FyZC1wb3N0ZXIge1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkLW1vcmUtaW5mb3JtYXRpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG5cclxuICAgICAgICBwLnJlZ3VsYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y4Mzc0NTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hZHVsdC1jb250ZW50IHtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG59XHJcblxyXG4uY2FyZC1jb21wYW5pZXMtaW5mbyB7XHJcbiAgICAuY29tcGFuaWVzLWxpc3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgcC5yZWd1bGFyIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGODM3NDU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hY3Rvci1kZXBhcnRtZW50IHtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jYXJkLW1haW4tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG4gICAgICAgIC5jYXJkLXBvc3RlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0OHB4KSB7XHJcbiAgICAuY2FyZC1tb3JlLWluZm9ybWF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people-by-id',
                templateUrl: './people-by-id.component.html',
                styleUrls: ['./people-by-id.component.scss']
            }]
    }], function () { return []; }, { people: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/request-api-movies.service */ "xw6H");
/* harmony import */ var _services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/request-api-people.service */ "220Z");
/* harmony import */ var _services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/request-api-serie.service */ "U01v");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movie.component */ "vaO1");
/* harmony import */ var _serie_serie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serie/serie.component */ "vCLl");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./people/people.component */ "twK9");










function AppComponent_app_movie_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-movie", 26);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("movies", ctx_r0.movies);
} }
function AppComponent_app_serie_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-serie", 27);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx_r1.series);
} }
function AppComponent_app_people_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-people", 28);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("peoples", ctx_r2.peoples);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class AppComponent {
    constructor(requestApiMoviesService, requestApiPeopleService, requestApiSerieService, el) {
        this.requestApiMoviesService = requestApiMoviesService;
        this.requestApiPeopleService = requestApiPeopleService;
        this.requestApiSerieService = requestApiSerieService;
        this.el = el;
        this.title = 'MovieSearch';
        this.searching = 'movie';
    }
    ngOnInit() {
        this.getPopularMovies();
        this.requestApiSerieService.getPopularSeries().subscribe((series) => this.series = series);
        this.requestApiPeopleService.getPopularPeople().subscribe((peoples) => this.peoples = peoples);
    }
    searchResult() {
        this.activeSearch = "";
        if (this.searching === "movie") {
            this.requestApiMoviesService.findAllMoviesByKeyword(this.searchInput).subscribe((movies) => this.movies = movies);
        }
        if (this.searching === "person") {
            this.requestApiPeopleService.findAllPeopleByKeyword(this.searchInput).subscribe((peoples) => this.peoples = peoples);
        }
        if (this.searching === "tv") {
            this.requestApiSerieService.findAllSerieByKeyword(this.searchInput).subscribe((series) => this.series = series);
        }
    }
    getPopularMovies() {
        this.searching = "movie";
        this.activeSearch = "popularMovies";
        this.requestApiMoviesService.getPopularMovies().subscribe((movies) => this.movies = movies);
    }
    getTopRatedMovies() {
        this.searching = "movie";
        this.activeSearch = "topRatedMovies";
        this.requestApiMoviesService.getTopRatedMovies().subscribe((movies) => this.movies = movies);
    }
    getNowMovies() {
        this.searching = "movie";
        this.activeSearch = "nowMovies";
        this.requestApiMoviesService.getNowMovies().subscribe((movies) => this.movies = movies);
    }
    getUpcomingMovies() {
        this.searching = "movie";
        this.activeSearch = "upcomingMovies";
        this.requestApiMoviesService.getUpcomingMovies().subscribe((movies) => this.movies = movies);
    }
    getPopularSeries() {
        this.searching = "tv";
        this.activeSearch = "popularSeries";
        this.requestApiSerieService.getPopularSeries().subscribe((series) => this.series = series);
    }
    getTopRatedSeries() {
        this.searching = "tv";
        this.activeSearch = "topRatedSeries";
        this.requestApiSerieService.getTopRatedSeries().subscribe((series) => this.series = series);
    }
    getAiringTodaySeries() {
        this.searching = "tv";
        this.activeSearch = "airingTodaySeries";
        this.requestApiSerieService.getAiringTodaySeries().subscribe((series) => this.series = series);
    }
    getAiringNowSeries() {
        this.searching = "tv";
        this.activeSearch = "airingNowSeries";
        this.requestApiSerieService.getAiringNowSeries().subscribe((series) => this.series = series);
    }
    getPopularPeoples() {
        this.searching = "person";
        this.activeSearch = "popularPeoples";
        this.requestApiPeopleService.getPopularPeople().subscribe((peoples) => this.peoples = peoples);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_1__["RequestApiMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiPeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiSerieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 73, vars: 32, consts: [[1, "navbar"], [1, "navbar-left"], ["href", "/", 1, "total-center"], [1, "white", "bold"], [1, "navbar-right"], [1, "vertical-center"], [1, "fas", "fa-search", 3, "click"], ["id", "search-input", "placeholder", "Rechercher un(e) s\u00E9rie/film/personne", "type", "text", 1, "navbar-search", "regular", "white", 3, "ngModel", "ngModelChange", "keyup"], ["name", "searching", "id", "searching", "required", "", 1, "search-option", 3, "ngModel", "ngModelChange"], ["value", "movie"], ["value", "tv"], ["value", "person"], [1, "content"], [1, "left-section"], [1, "left-section-categorie"], [1, "left-section-btn", 3, "ngClass", "click"], [1, "fas", "fa-fire"], [1, "regular"], [1, "fas", "fa-poll"], [1, "fas", "fa-clock"], [1, "fas", "fa-calendar-alt"], [1, "white", "regular"], [1, "right-section"], ["class", "posters-section", 3, "movies", 4, "ngIf"], ["class", "posters-section", 3, "series", 4, "ngIf"], ["class", "posters-section", 3, "peoples", 4, "ngIf"], [1, "posters-section", 3, "movies"], [1, "posters-section", 3, "series"], [1, "posters-section", 3, "peoples"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\uD83D\uDCFA Netflux");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_i_click_8_listener() { return ctx.searchResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchInput = $event; })("keyup", function AppComponent_Template_input_keyup_9_listener() { return ctx.searchResult(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_select_ngModelChange_10_listener($event) { return ctx.searching = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Film");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "S\u00E9rie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Personne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Films");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_23_listener() { return ctx.getPopularMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Populaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_27_listener() { return ctx.getTopRatedMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Mieux not\u00E9s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_31_listener() { return ctx.getNowMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " A l'affiche");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_35_listener() { return ctx.getUpcomingMovies(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " A venir");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "S\u00E9ries");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_43_listener() { return ctx.getPopularSeries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Populaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_47_listener() { return ctx.getTopRatedSeries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Mieux not\u00E9es");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_51_listener() { return ctx.getAiringTodaySeries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Aujourd'hui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_55_listener() { return ctx.getAiringNowSeries(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Cette semaine");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Acteurs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_63_listener() { return ctx.getPopularPeoples(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Populaires");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Recherchez films, s\u00E9ries et acteurs !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AppComponent_app_movie_70_Template, 1, 1, "app-movie", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, AppComponent_app_serie_71_Template, 1, 1, "app-serie", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, AppComponent_app_people_72_Template, 1, 1, "app-people", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchInput);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.activeSearch === "popularMovies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.activeSearch === "topRatedMovies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.activeSearch === "nowMovies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.activeSearch === "upcomingMovies"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.activeSearch === "popularSeries"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.activeSearch === "topRatedSeries"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.activeSearch === "airingTodaySeries"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.activeSearch === "airingNowSeries"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.activeSearch === "popularPeoples"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching == "movie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching == "tv");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searching == "person");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"], _serie_serie_component__WEBPACK_IMPORTED_MODULE_7__["SerieComponent"], _people_people_component__WEBPACK_IMPORTED_MODULE_8__["PeopleComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  height: 55px;\n  width: 100%;\n  display: flex;\n  position: fixed;\n  z-index: 1;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n.navbar-left[_ngcontent-%COMP%] {\n  width: 25%;\n  max-width: 300px;\n  background-color: #F83745;\n  display: flex;\n}\n\n.navbar-right[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #FF424F;\n  display: flex;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-left: 2rem;\n  width: 80%;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffffd4;\n  cursor: pointer;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  background-color: transparent;\n  border: none;\n  width: 75%;\n  caret-color: #ffffffd4;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]::placeholder {\n  color: #ffffffd4;\n}\n\n.navbar-right[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .search-option[_ngcontent-%COMP%] {\n  width: 15%;\n  text-align-last: right;\n  font-weight: 700;\n  border: none;\n  color: #ffffffd4;\n  outline: none;\n  background-color: #FF424F;\n  cursor: pointer;\n}\n\n.content[_ngcontent-%COMP%] {\n  padding-top: 55px;\n  width: 100%;\n  height: 100%;\n  display: flex;\n}\n\n.left-section[_ngcontent-%COMP%] {\n  width: 20%;\n  max-width: 300px;\n  background-color: #191C1F;\n  height: 100%;\n  position: fixed;\n  display: flex;\n  flex-direction: column;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-categorie[_ngcontent-%COMP%] {\n  display: flex;\n  height: 40px;\n  width: 50%;\n  border-left: 0;\n  border-right: 0;\n  display: flex;\n  margin: 1.5rem 0 0;\n  border-top: 0;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-categorie[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: auto 1rem;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-btn[_ngcontent-%COMP%] {\n  width: calc(100% + 1px);\n  height: 40px;\n  display: flex;\n  cursor: pointer;\n  display: flex;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin: auto 0 auto 1rem;\n  color: #f83745;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-btn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: auto 0 auto 1rem;\n  font-size: 0.9rem;\n  color: #f83745;\n}\n\n.left-section[_ngcontent-%COMP%]   .left-section-btn.active[_ngcontent-%COMP%] {\n  background-color: #222b31;\n}\n\n.right-section[_ngcontent-%COMP%] {\n  margin-left: 20%;\n  width: 80%;\n  height: 100%;\n}\n\n.right-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 3rem;\n}\n\n@media screen and (max-width: 768px) {\n  .left-section-categorie[_ngcontent-%COMP%] {\n    margin: 1.5rem auto 0 !important;\n    width: -webkit-fit-content !important;\n    width: -moz-fit-content !important;\n    width: fit-content !important;\n  }\n\n  .left-section-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n    text-align: center;\n    width: 100%;\n  }\n  .left-section-btn[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n@media screen and (min-width: 1503px) {\n  .right-section[_ngcontent-%COMP%] {\n    margin-left: 300px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBQ1I7O0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFDWjs7QUFFUTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBQVo7O0FBR1E7RUFDSSxVQUFBO0FBRFo7O0FBSVE7RUFDSSxnQkFBQTtBQUZaOztBQUtRO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSFo7O0FBUUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUxKOztBQVFBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUxKOztBQU9JO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBTFI7O0FBT1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFMWjs7QUFTSTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQVBSOztBQVNRO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0FBUFo7O0FBVVE7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVJaOztBQVlJO0VBQ0kseUJBQUE7QUFWUjs7QUFjQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFYSjs7QUFhSTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQVhSOztBQWVBO0VBQ0k7SUFDSSxnQ0FBQTtJQUNBLHFDQUFBO0lBQUEsa0NBQUE7SUFBQSw2QkFBQTtFQVpOOztFQWlCTTtJQUNJLHlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0VBZFY7RUFpQk07SUFDSSxhQUFBO0VBZlY7QUFDRjs7QUFtQkE7RUFDSTtJQUNJLDZCQUFBO0VBakJOO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItbGVmdCB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGODM3NDU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2YmFyLXJpZ2h0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDI0RjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZkNDtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5uYXZiYXItc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgICBjYXJldC1jb2xvcjogI2ZmZmZmZmQ0O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5uYXZiYXItc2VhcmNoOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItc2VhcmNoOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmZDQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2VhcmNoLW9wdGlvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ24tbGFzdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmZkNDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDI0RjtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDU1cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sZWZ0LXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxQzFGO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLmxlZnQtc2VjdGlvbi1jYXRlZ29yaWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gMCAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDA7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtc2VjdGlvbi1idG4ge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyAxcHgpO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4Mzc0NTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogI2Y4Mzc0NTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQtc2VjdGlvbi1idG4uYWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYjMxO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmlnaHQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmxlZnQtc2VjdGlvbi1jYXRlZ29yaWUge1xyXG4gICAgICAgIG1hcmdpbjogMS41cmVtIGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZWZ0LXNlY3Rpb24tYnRuIHtcclxuICAgICAgICBcclxuICAgICAgICBpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDNweCkge1xyXG4gICAgLnJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_1__["RequestApiMoviesService"] }, { type: _services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiPeopleService"] }, { type: _services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiSerieService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "U01v":
/*!*******************************************************!*\
  !*** ./src/app/services/request-api-serie.service.ts ***!
  \*******************************************************/
/*! exports provided: RequestApiSerieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApiSerieService", function() { return RequestApiSerieService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RequestApiSerieService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3/';
        this.key = '89481d4469f0f699ac04327380e53f95';
    }
    findAllSerieByKeyword(keyword) {
        return this.http.get(`${this.apiUrl}search/tv?api_key=${this.key}&query=${keyword}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allSeries) => allSeries.results));
    }
    findSerieById(id) {
        return this.http.get(`${this.apiUrl}tv/${id}?api_key=${this.key}`);
    }
    findSerieByGenre(id) {
        return this.http.get(`${this.apiUrl}discover/tv?api_key=${this.key}&with_genres=${id}`);
    }
    getPopularSeries() {
        return this.http.get(`${this.apiUrl}tv/popular?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allSeries) => allSeries.results));
    }
    getTopRatedSeries() {
        return this.http.get(`${this.apiUrl}tv/top_rated?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allSeries) => allSeries.results));
    }
    getAiringTodaySeries() {
        return this.http.get(`${this.apiUrl}tv/airing_today?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allSeries) => allSeries.results));
    }
    getAiringNowSeries() {
        return this.http.get(`${this.apiUrl}tv/on_the_air?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allSeries) => allSeries.results));
    }
}
RequestApiSerieService.ɵfac = function RequestApiSerieService_Factory(t) { return new (t || RequestApiSerieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RequestApiSerieService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestApiSerieService, factory: RequestApiSerieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestApiSerieService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Z1D3":
/*!*****************************************!*\
  !*** ./src/app/pipes/map-genre.pipe.ts ***!
  \*****************************************/
/*! exports provided: MapGenrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapGenrePipe", function() { return MapGenrePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapGenrePipe {
    transform(genresMovie, id) {
        return genresMovie[genresMovie.findIndex(genreMovie => genreMovie.id === id)].name;
    }
}
MapGenrePipe.ɵfac = function MapGenrePipe_Factory(t) { return new (t || MapGenrePipe)(); };
MapGenrePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mapGenre", type: MapGenrePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapGenrePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'mapGenre'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie/movie.component */ "vaO1");
/* harmony import */ var _people_people_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./people/people.component */ "twK9");
/* harmony import */ var _serie_serie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serie/serie.component */ "vCLl");
/* harmony import */ var _pipes_heure_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/heure.pipe */ "cAnv");
/* harmony import */ var _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/note.pipe */ "kXnP");
/* harmony import */ var _movie_by_id_movie_by_id_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movie-by-id/movie-by-id.component */ "+yFR");
/* harmony import */ var _serie_by_id_serie_by_id_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./serie-by-id/serie-by-id.component */ "ld4D");
/* harmony import */ var _people_by_id_people_by_id_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./people-by-id/people-by-id.component */ "OZYo");
/* harmony import */ var _pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/map-genre.pipe */ "Z1D3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"],
        _people_people_component__WEBPACK_IMPORTED_MODULE_7__["PeopleComponent"],
        _serie_serie_component__WEBPACK_IMPORTED_MODULE_8__["SerieComponent"],
        _pipes_heure_pipe__WEBPACK_IMPORTED_MODULE_9__["HeurePipe"],
        _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_10__["NotePipe"],
        _movie_by_id_movie_by_id_component__WEBPACK_IMPORTED_MODULE_11__["MovieByIdComponent"],
        _serie_by_id_serie_by_id_component__WEBPACK_IMPORTED_MODULE_12__["SerieByIdComponent"],
        _people_by_id_people_by_id_component__WEBPACK_IMPORTED_MODULE_13__["PeopleByIdComponent"],
        _pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_14__["MapGenrePipe"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _movie_movie_component__WEBPACK_IMPORTED_MODULE_6__["MovieComponent"],
                    _people_people_component__WEBPACK_IMPORTED_MODULE_7__["PeopleComponent"],
                    _serie_serie_component__WEBPACK_IMPORTED_MODULE_8__["SerieComponent"],
                    _pipes_heure_pipe__WEBPACK_IMPORTED_MODULE_9__["HeurePipe"],
                    _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_10__["NotePipe"],
                    _movie_by_id_movie_by_id_component__WEBPACK_IMPORTED_MODULE_11__["MovieByIdComponent"],
                    _serie_by_id_serie_by_id_component__WEBPACK_IMPORTED_MODULE_12__["SerieByIdComponent"],
                    _people_by_id_people_by_id_component__WEBPACK_IMPORTED_MODULE_13__["PeopleByIdComponent"],
                    _pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_14__["MapGenrePipe"],
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cAnv":
/*!*************************************!*\
  !*** ./src/app/pipes/heure.pipe.ts ***!
  \*************************************/
/*! exports provided: HeurePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeurePipe", function() { return HeurePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeurePipe {
    transform(value) {
        this.heure = Math.trunc(value / 60);
        this.minute = value % 60;
        if (this.minute < 10) {
            return (`${this.heure}h0${this.minute}`);
        }
        else {
            return (`${this.heure}h${this.minute}`);
        }
    }
}
HeurePipe.ɵfac = function HeurePipe_Factory(t) { return new (t || HeurePipe)(); };
HeurePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "heure", type: HeurePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeurePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'heure'
            }]
    }], null, null); })();


/***/ }),

/***/ "kXnP":
/*!************************************!*\
  !*** ./src/app/pipes/note.pipe.ts ***!
  \************************************/
/*! exports provided: NotePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotePipe", function() { return NotePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class NotePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(note, maxNote) {
        let starsNoteHtml = '';
        for (let index = 0; index < maxNote; index++) {
            starsNoteHtml += index < Math.round(note) ? `<i class="fas fa-star"></i>` : `<i class="far fa-star"></i>`;
        }
        return this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.sanitizer.bypassSecurityTrustHtml(starsNoteHtml));
    }
}
NotePipe.ɵfac = function NotePipe_Factory(t) { return new (t || NotePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
NotePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "note", type: NotePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'note'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "ld4D":
/*!******************************************************!*\
  !*** ./src/app/serie-by-id/serie-by-id.component.ts ***!
  \******************************************************/
/*! exports provided: SerieByIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieByIdComponent", function() { return SerieByIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_note_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pipes/note.pipe */ "kXnP");




function SerieByIdComponent_li_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SerieByIdComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SerieByIdComponent_li_6_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", genre_r8.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r9 !== ctx_r0.serie.genres.length - 1);
} }
function SerieByIdComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", ctx_r1.serie.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", ctx_r1.serie.poster_path);
} }
function SerieByIdComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 17);
} }
function SerieByIdComponent_div_36_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const creator_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](creator_r12.name);
} }
function SerieByIdComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cr\u00E9ateur");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SerieByIdComponent_div_36_p_4_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.serie.created_by);
} }
function SerieByIdComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "En cours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SerieByIdComponent_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Termin\u00E9e");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SerieByIdComponent {
    constructor() { }
    ngOnInit() {
    }
}
SerieByIdComponent.ɵfac = function SerieByIdComponent_Factory(t) { return new (t || SerieByIdComponent)(); };
SerieByIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SerieByIdComponent, selectors: [["app-serie-by-id"]], inputs: { serie: "serie" }, decls: 49, vars: 19, consts: [[1, "card-information"], [1, "card-top"], [1, "bold"], [1, "genre-list"], ["class", "regular", 4, "ngFor", "ngForOf"], [1, "card-note", 3, "innerHtml"], [1, "card-main-content"], [1, "card-poster"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], [1, "card-description"], [1, "regular"], [1, "card-more-information"], [4, "ngIf"], ["class", "regular", 4, "ngIf", "ngIfElse"], ["serieFinish", ""], [3, "src", "alt"], ["src", "http://www.serienewz.com/img/films/poster-holder.jpg", "alt", "poster-not-available"], [1, "companies-list"]], template: function SerieByIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SerieByIdComponent_li_6_Template, 3, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SerieByIdComponent_img_11_Template, 1, 2, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SerieByIdComponent_ng_template_12_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description de la s\u00E9rie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Saisons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Dur\u00E9e~ episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, SerieByIdComponent_div_36_Template, 5, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Dernier \u00E9pisode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Etat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, SerieByIdComponent_p_46_Template, 2, 0, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, SerieByIdComponent_ng_template_47_Template, 2, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serie.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.serie.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 13, ctx.serie.vote_average, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serie.poster_path)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.serie.overview);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.serie.number_of_seasons, " saisons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.serie.number_of_episodes, " \u00E9pisodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.serie.episode_run_time, " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serie.created_by);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Le ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](42, 16, ctx.serie.last_air_date, "dd/MM/yyyy"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serie.in_production)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_pipes_note_pipe__WEBPACK_IMPORTED_MODULE_2__["NotePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: ["h3[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n}\n\n.genre-list[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #F83745;\n}\n\n.card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.card-main-content[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  display: flex;\n}\n\n.card-description[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\n\n.bold[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-more-information[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  flex-direction: column;\n  width: 33%;\n}\n\n.card-more-information[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin-top: 0;\n}\n\n.card-more-information[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.card-more-information[_ngcontent-%COMP%]   .companies-list[_ngcontent-%COMP%]   p.regular[_ngcontent-%COMP%] {\n  color: #F83745;\n  margin: 0;\n}\n\n.adult-content[_ngcontent-%COMP%] {\n  color: #F83745;\n}\n\n@media screen and (max-width: 1024px) {\n  .card-main-content[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-poster[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    margin: auto;\n  }\n  .card-main-content[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n    padding-left: 0;\n    margin-top: 2rem;\n  }\n}\n\n@media screen and (max-width: 648px) {\n  .card-more-information[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcmllLWJ5LWlkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxTQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBSUk7RUFDSSxZQUFBO0FBRFI7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLG9CQUFBO0FBRko7O0FBS0E7RUFDSSxTQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFGSjs7QUFJSTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtBQUZSOztBQUlRO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFGWjs7QUFNSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFKUjs7QUFNUTtFQUNJLGNBQUE7RUFDQSxTQUFBO0FBSlo7O0FBU0E7RUFDSSxjQUFBO0FBTko7O0FBU0E7RUFDSTtJQUNJLGNBQUE7RUFOTjtFQVFNO0lBQ0ksYUFBQTtFQU5WO0VBUVU7SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxZQUFBO0VBTmQ7RUFVTTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtFQVJWO0FBQ0Y7O0FBWUE7RUFDSTtJQUNJLGNBQUE7RUFWTjtBQUNGIiwiZmlsZSI6InNlcmllLWJ5LWlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5nZW5yZS1saXN0IHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG59XHJcblxyXG4uY2FyZC1wb3N0ZXIge1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZC1tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jYXJkLW1vcmUtaW5mb3JtYXRpb257XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG5cclxuICAgICAgICBwLnJlZ3VsYXIge1xyXG4gICAgICAgICAgICBjb2xvcjogI0Y4Mzc0NTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbXBhbmllcy1saXN0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIHAucmVndWxhciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjgzNzQ1O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWR1bHQtY29udGVudCB7XHJcbiAgICBjb2xvcjogI0Y4Mzc0NTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY2FyZC1tYWluLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAuY2FyZC1wb3N0ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NDhweCkge1xyXG4gICAgLmNhcmQtbW9yZS1pbmZvcm1hdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerieByIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-serie-by-id',
                templateUrl: './serie-by-id.component.html',
                styleUrls: ['./serie-by-id.component.scss']
            }]
    }], function () { return []; }, { serie: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "twK9":
/*!********************************************!*\
  !*** ./src/app/people/people.component.ts ***!
  \********************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _transitions_open_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transitions/open-close */ "0Pu/");
/* harmony import */ var _services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/request-api-people.service */ "220Z");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _people_by_id_people_by_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../people-by-id/people-by-id.component */ "OZYo");






function PeopleComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
} }
function PeopleComponent_div_0_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const people_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", people_r3.profile_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", people_r3.profile_path);
} }
function PeopleComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} }
function PeopleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeopleComponent_div_0_div_1_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeopleComponent_div_0_img_2_Template, 1, 2, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PeopleComponent_div_0_ng_template_3_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleComponent_div_0_Template_h3_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const people_r3 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.openModalInformation(people_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const people_r3 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", people_r3.popularity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", people_r3.profile_path)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", people_r3.name, " >");
} }
function PeopleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PeopleComponent_div_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.closeModalInformation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-people-by-id", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx_r1.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("people", ctx_r1.peopleById);
} }
function PeopleComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No people found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PeopleComponent {
    constructor(requestApiPeopleService) {
        this.requestApiPeopleService = requestApiPeopleService;
        this.isOpen = false;
    }
    ngOnInit() {
    }
    toggle() {
        this.isOpen = !this.isOpen;
        document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
    }
    openModalInformation(id) {
        this.requestApiPeopleService.findPeopleById(id).subscribe((people) => this.peopleById = people);
        this.toggle();
    }
    closeModalInformation() {
        this.toggle();
    }
}
PeopleComponent.ɵfac = function PeopleComponent_Factory(t) { return new (t || PeopleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiPeopleService"])); };
PeopleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PeopleComponent, selectors: [["app-people"]], inputs: { peoples: "peoples" }, decls: 3, vars: 3, consts: [["class", "poster", 4, "ngFor", "ngForOf"], ["class", "modal", 4, "ngIf"], [4, "ngIf"], [1, "poster"], ["class", "vote", 4, "ngIf"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], [1, "white", "bold", 3, "click"], [1, "vote"], [1, "regular"], [3, "src", "alt"], ["src", "https://www.vachamber.com/wp-content/uploads/2018/01/Image-Unavailable.jpg", "alt", "poster-not-available"], [1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "card-template", 3, "people"], [1, "white", "regular"]], template: function PeopleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PeopleComponent_div_0_Template, 7, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PeopleComponent_div_1_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PeopleComponent_div_2_Template, 3, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.peoples);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.peopleById && ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.peoples.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _people_by_id_people_by_id_component__WEBPACK_IMPORTED_MODULE_4__["PeopleByIdComponent"]], encapsulation: 2, data: { animation: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_1__["OpenCloseTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-people',
                templateUrl: './people.component.html',
                animations: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_1__["OpenCloseTransition"]]
            }]
    }], function () { return [{ type: _services_request_api_people_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiPeopleService"] }]; }, { peoples: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vCLl":
/*!******************************************!*\
  !*** ./src/app/serie/serie.component.ts ***!
  \******************************************/
/*! exports provided: SerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerieComponent", function() { return SerieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _transitions_open_close__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../transitions/open-close */ "0Pu/");
/* harmony import */ var _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/request-api-genres.service */ "ABp6");
/* harmony import */ var _services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/request-api-serie.service */ "U01v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _serie_by_id_serie_by_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../serie-by-id/serie-by-id.component */ "ld4D");
/* harmony import */ var _pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/map-genre.pipe */ "Z1D3");








function SerieComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerieComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.searchByGenre(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
} }
function SerieComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](serie_r7.vote_average);
} }
function SerieComponent_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const serie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", serie_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("alt", serie_r7.poster_path);
} }
function SerieComponent_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} }
function SerieComponent_div_2_li_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SerieComponent_div_2_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "mapGenre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SerieComponent_div_2_li_8_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const serie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, ctx_r12.genresSerie, genre_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", index_r16 !== serie_r7.genre_ids.length - 1);
} }
function SerieComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SerieComponent_div_2_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SerieComponent_div_2_img_2_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SerieComponent_div_2_ng_template_3_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerieComponent_div_2_Template_h3_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const serie_r7 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openModalInformation(serie_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SerieComponent_div_2_li_8_Template, 4, 5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const serie_r7 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", serie_r7.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", serie_r7.poster_path)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", serie_r7.name, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", serie_r7.genre_ids);
} }
function SerieComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SerieComponent_div_3_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.closeModalInformation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-serie-by-id", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("serie", ctx_r2.serieById);
} }
function SerieComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No series found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SerieComponent {
    constructor(requestApiGenresService, requestApiSerieService) {
        this.requestApiGenresService = requestApiGenresService;
        this.requestApiSerieService = requestApiSerieService;
        this.isOpen = false;
    }
    ngOnInit() {
        this.requestApiGenresService.findAllGenresSeries().subscribe(x => this.genresSerie = x.genres);
    }
    toggle() {
        this.isOpen = !this.isOpen;
        document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
    }
    openModalInformation(id) {
        this.requestApiSerieService.findSerieById(id).subscribe((serie) => this.serieById = serie);
        this.toggle();
    }
    closeModalInformation() {
        this.toggle();
    }
    searchByGenre(id) {
        this.requestApiSerieService.findSerieByGenre(id).subscribe(x => this.series = x.results);
    }
}
SerieComponent.ɵfac = function SerieComponent_Factory(t) { return new (t || SerieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiGenresService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiSerieService"])); };
SerieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SerieComponent, selectors: [["app-serie"]], inputs: { series: "series" }, decls: 5, vars: 4, consts: [["id", "menuItem"], ["class", "left-section-btn", "id", "items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "poster", 4, "ngFor", "ngForOf"], ["class", "modal", 4, "ngIf"], [4, "ngIf"], ["id", "items", 1, "left-section-btn", 3, "click"], [1, "regular"], [1, "poster"], ["class", "vote", 4, "ngIf"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], ["onclick", "disableScroll()", 1, "white", "bold", 3, "click"], [1, "genre-list"], ["class", "regular", 4, "ngFor", "ngForOf"], [1, "vote"], [3, "src", "alt"], ["src", "http://www.movienewz.com/img/films/poster-holder.jpg", "alt", "poster-not-available"], [1, "modal"], [1, "modal-content"], ["onclick", "enableScroll()", 1, "close", 3, "click"], [1, "card-template", 3, "serie"], [1, "white", "regular"]], template: function SerieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SerieComponent_li_1_Template, 3, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SerieComponent_div_2_Template, 9, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SerieComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SerieComponent_div_4_Template, 3, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genresSerie);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.serieById && ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.series.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _serie_by_id_serie_by_id_component__WEBPACK_IMPORTED_MODULE_5__["SerieByIdComponent"]], pipes: [_pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_6__["MapGenrePipe"]], styles: ["#menuItem[_ngcontent-%COMP%] {\n  margin-top: -3%;\n  padding-top: 0;\n  list-style-type: none;\n  text-align: center;\n  padding-left: 1rem;\n}\n\n#items[_ngcontent-%COMP%] {\n  float: left;\n  margin: auto;\n  padding: 10px;\n  cursor: pointer;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.open-close-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNlcmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUoiLCJmaWxlIjoic2VyaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudUl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDotMyU7XHJcbiAgICBwYWRkaW5nLXRvcDowO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgI2l0ZW1zIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgaDMge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAub3Blbi1jbG9zZS1jb250YWluZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9Il19 */"], data: { animation: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_1__["OpenCloseTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SerieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-serie',
                templateUrl: './serie.component.html',
                styleUrls: ['./serie.component.scss'],
                animations: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_1__["OpenCloseTransition"]]
            }]
    }], function () { return [{ type: _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiGenresService"] }, { type: _services_request_api_serie_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiSerieService"] }]; }, { series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vaO1":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var _transitions_open_close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../transitions/open-close */ "0Pu/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/request-api-movies.service */ "xw6H");
/* harmony import */ var _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/request-api-genres.service */ "ABp6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _movie_by_id_movie_by_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../movie-by-id/movie-by-id.component */ "+yFR");
/* harmony import */ var _pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/map-genre.pipe */ "Z1D3");








function MovieComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const item_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.searchByGenre(item_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function MovieComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](movie_r7.vote_average);
} }
function MovieComponent_div_2_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 15);
} if (rf & 2) {
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w440_and_h660_face", movie_r7.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", movie_r7.poster_path);
} }
function MovieComponent_div_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 16);
} }
function MovieComponent_div_2_li_8_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, ",\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MovieComponent_div_2_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "mapGenre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieComponent_div_2_li_8_span_3_Template, 2, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r15 = ctx.$implicit;
    const index_r16 = ctx.index;
    const movie_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 2, ctx_r12.genresMovie, genre_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r16 !== movie_r7.genre_ids.length - 1);
} }
function MovieComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieComponent_div_2_div_1_Template, 3, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MovieComponent_div_2_img_2_Template, 1, 2, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieComponent_div_2_ng_template_3_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieComponent_div_2_Template_h3_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20); const movie_r7 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.openModalInformation(movie_r7.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MovieComponent_div_2_li_8_Template, 4, 5, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r7 = ctx.$implicit;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", movie_r7.vote_average);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", movie_r7.poster_path)("ngIfElse", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", movie_r7.title, " >");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", movie_r7.genre_ids);
} }
function MovieComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MovieComponent_div_3_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.closeModalInformation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-movie-by-id", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("movie", ctx_r2.movieById);
} }
function MovieComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "No movies found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class MovieComponent {
    constructor(requestApiMoviesService, requestApiGenresService) {
        this.requestApiMoviesService = requestApiMoviesService;
        this.requestApiGenresService = requestApiGenresService;
        this.isOpen = false;
    }
    toggle() {
        this.isOpen = !this.isOpen;
        document.body.style.overflowY = this.isOpen ? 'hidden' : 'initial';
    }
    ngOnInit() {
        this.requestApiGenresService.findAllGenresMovie().subscribe(x => this.genresMovie = x.genres);
    }
    openModalInformation(id) {
        this.requestApiMoviesService.findMoviesById(id).subscribe((movie) => this.movieById = movie);
        this.toggle();
    }
    closeModalInformation() {
        this.toggle();
    }
    searchByGenre(id) {
        this.requestApiMoviesService.findMovieByGenre(id).subscribe(x => this.movies = x.results);
    }
}
MovieComponent.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiMoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiGenresService"])); };
MovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MovieComponent, selectors: [["app-movie"]], inputs: { movies: "movies" }, decls: 5, vars: 4, consts: [["id", "menuItem"], ["class", "left-section-btn", "id", "items", 3, "click", 4, "ngFor", "ngForOf"], ["class", "poster", 4, "ngFor", "ngForOf"], ["class", "modal", 4, "ngIf"], [4, "ngIf"], ["id", "items", 1, "left-section-btn", 3, "click"], [1, "regular"], [1, "poster"], ["class", "vote", 4, "ngIf"], [3, "src", "alt", 4, "ngIf", "ngIfElse"], ["imgNotAvailable", ""], [1, "white", "bold", 3, "click"], [1, "genre-list"], ["class", "regular", 4, "ngFor", "ngForOf"], [1, "vote"], [3, "src", "alt"], ["src", "http://www.movienewz.com/img/films/poster-holder.jpg", "alt", "poster-not-available"], [1, "modal"], [1, "modal-content"], [1, "close", 3, "click"], [1, "card-template", 3, "movie"], [1, "white", "regular"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MovieComponent_li_1_Template, 3, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, MovieComponent_div_2_Template, 9, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, MovieComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MovieComponent_div_4_Template, 3, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genresMovie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.movies);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.movieById && ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.movies.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _movie_by_id_movie_by_id_component__WEBPACK_IMPORTED_MODULE_5__["MovieByIdComponent"]], pipes: [_pipes_map_genre_pipe__WEBPACK_IMPORTED_MODULE_6__["MapGenrePipe"]], styles: ["#menuItem[_ngcontent-%COMP%] {\n  margin-top: -3%;\n  padding-top: 0;\n  list-style-type: none;\n  text-align: center;\n  padding-left: 1rem;\n}\n\n#items[_ngcontent-%COMP%] {\n  float: left;\n  margin: auto;\n  padding: 10px;\n  cursor: pointer;\n}\n\nh3[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.open-close-container[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG1vdmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUYiLCJmaWxlIjoibW92aWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudUl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6LTMlO1xyXG4gIHBhZGRpbmctdG9wOjA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4jaXRlbXMge1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuaDMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ub3Blbi1jbG9zZS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn0iXX0= */"], data: { animation: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_0__["OpenCloseTransition"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-movie',
                templateUrl: './movie.component.html',
                styleUrls: ['./movie.component.scss'],
                animations: [_transitions_open_close__WEBPACK_IMPORTED_MODULE_0__["OpenCloseTransition"]]
            }]
    }], function () { return [{ type: _services_request_api_movies_service__WEBPACK_IMPORTED_MODULE_2__["RequestApiMoviesService"] }, { type: _services_request_api_genres_service__WEBPACK_IMPORTED_MODULE_3__["RequestApiGenresService"] }]; }, { movies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "xw6H":
/*!********************************************************!*\
  !*** ./src/app/services/request-api-movies.service.ts ***!
  \********************************************************/
/*! exports provided: RequestApiMoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestApiMoviesService", function() { return RequestApiMoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class RequestApiMoviesService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3/';
        this.key = '89481d4469f0f699ac04327380e53f95';
    }
    findAllMoviesByKeyword(keyword) {
        return this.http.get(`${this.apiUrl}search/movie?api_key=${this.key}&query=${keyword}&include_adult=true`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allMovies) => allMovies.results));
    }
    findMoviesById(id) {
        return this.http.get(`${this.apiUrl}movie/${id}?api_key=${this.key}`);
    }
    findMovieByGenre(id) {
        return this.http.get(`${this.apiUrl}discover/movie?api_key=${this.key}&with_genres=${id}`);
    }
    getPopularMovies() {
        return this.http.get(`${this.apiUrl}movie/popular?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allMovies) => allMovies.results));
    }
    getTopRatedMovies() {
        return this.http.get(`${this.apiUrl}movie/top_rated?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allMovies) => allMovies.results));
    }
    getNowMovies() {
        return this.http.get(`${this.apiUrl}movie/now_playing?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allMovies) => allMovies.results));
    }
    getUpcomingMovies() {
        return this.http.get(`${this.apiUrl}movie/upcoming?api_key=${this.key}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((allMovies) => allMovies.results));
    }
}
RequestApiMoviesService.ɵfac = function RequestApiMoviesService_Factory(t) { return new (t || RequestApiMoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
RequestApiMoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestApiMoviesService, factory: RequestApiMoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestApiMoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map