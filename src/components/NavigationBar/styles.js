import styled from "styled-components";

export const Nav = styled.div`
  .navbar-b {
    transition: all 0.5s ease-in-out;
    background-color: transparent;
    padding-top: 1.563rem;
    padding-bottom: 1.563rem;
  }

.navbar-b.navbar-reduce {
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
}

.navbar-b.navbar-trans .nav-item,
.navbar-b.navbar-reduce .nav-item {
  position: relative;
  padding-right: 10px;
  padding-left: 0;
}

.navbar-b.navbar-trans .nav-link,
.navbar-b.navbar-reduce .nav-link {
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
}

.navbar-b.navbar-trans .nav-link:before,
.navbar-b.navbar-reduce .nav-link:before {
  content: '';
  position: absolute;
  margin-left: 0px;
  width: 0%;
  bottom: 0;
  left: 0;
  height: 2px;
  transition: all 500ms ease;
}

.navbar-b.navbar-trans .nav-link:hover,
.navbar-b.navbar-reduce .nav-link:hover {
  color: #1B1B1B;
}

.navbar-b.navbar-trans .nav-link:hover:before,
.navbar-b.navbar-reduce .nav-link:hover:before {
  width: 35px;
}

.navbar-b.navbar-trans .show > .nav-link:before,
.navbar-b.navbar-trans .active > .nav-link:before,
.navbar-b.navbar-trans .nav-link.show:before,
.navbar-b.navbar-trans .nav-link.active:before,
.navbar-b.navbar-reduce .show > .nav-link:before,
.navbar-b.navbar-reduce .active > .nav-link:before,
.navbar-b.navbar-reduce .nav-link.show:before,
.navbar-b.navbar-reduce .nav-link.active:before {
  width: 35px;
}

.navbar-b.navbar-trans .nav-link:before {
  background-color: #fff;
}

.navbar-b.navbar-trans .nav-link:hover {
  color: #fff;
}

.navbar-b.navbar-trans .show > .nav-link,
.navbar-b.navbar-trans .active > .nav-link,
.navbar-b.navbar-trans .nav-link.show,
.navbar-b.navbar-trans .nav-link.active {
  color: #fff;
}

.navbar-b.navbar-reduce {
  transition: all .5s ease-in-out;
  background-color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
}

.navbar-b.navbar-reduce .nav-link {
  color: #0078ff;
}

.navbar-b.navbar-reduce .nav-link:before {
  background-color: #0078ff;
}

.navbar-b.navbar-reduce .nav-link:hover {
  color: #0078ff;
}

.navbar-b.navbar-reduce .show > .nav-link,
.navbar-b.navbar-reduce .active > .nav-link,
.navbar-b.navbar-reduce .nav-link.show,
.navbar-b.navbar-reduce .nav-link.active {
  color: #0078ff;
}

.navbar-b.navbar-reduce .navbar-brand {
  color: #0078ff;
}

.navbar-b.navbar-reduce .navbar-toggler span {
  background-color: #1B1B1B;
}

.navbar-b .navbar-brand {
  color: #fff;
  font-size: 1.6rem;
  font-weight: 600;
}

.navbar-b .navbar-nav .dropdown-item.show .dropdown-menu,
.navbar-b .dropdown.show .dropdown-menu,
.navbar-b .dropdown-btn.show .dropdown-menu {
  -webkit-transform: translate3d(0px, 0px, 0px);
  transform: translate3d(0px, 0px, 0px);
  visibility: visible !important;
}

.navbar-b .dropdown-menu {
  margin: 1.12rem 0 0;
  border-radius: 0;
}

.navbar-b .dropdown-menu .dropdown-item {
  padding: .7rem 1.7rem;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item:hover {
  background-color: #0078ff;
  color: #fff;
  transition: all 500ms ease;
}

.navbar-b .dropdown-menu .dropdown-item.active {
  background-color: #0078ff;
}

/*--/ Hamburger Navbar /--*/

.navbar-toggler {
  position: relative;
}

.navbar-toggler:focus,
.navbar-toggler:active {
  outline: 0;
}

.navbar-toggler span {
  display: block;
  background-color: #fff;
  height: 3px;
  width: 25px;
  margin-top: 4px;
  margin-bottom: 4px;
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  left: 0;
  opacity: 1;
}

.navbar-toggler span:nth-child(1),
.navbar-toggler span:nth-child(3) {
  transition: -webkit-transform .35s ease-in-out;
  transition: transform .35s ease-in-out;
  transition: transform .35s ease-in-out, -webkit-transform .35s ease-in-out;
}

.navbar-toggler:not(.collapsed) span:nth-child(1) {
  position: absolute;
  left: 12px;
  top: 10px;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  opacity: 0.9;
}

.navbar-toggler:not(.collapsed) span:nth-child(2) {
  height: 12px;
  visibility: hidden;
  background-color: transparent;
}

.navbar-toggler:not(.collapsed) span:nth-child(3) {
  position: absolute;
  left: 12px;
  top: 10px;
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
  opacity: 0.9;
}

`;
