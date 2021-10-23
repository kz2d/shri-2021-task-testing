/**
 * @jest-environment jsdom
 */
import {createMemoryHistory} from "history"
import {ExampleApi,CartApi} from "../../src/client/api"
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {render} from "@testing-library/react"
import { Application } from '../../src/client/Application';
import { initStore } from '../../src/client/store';import "@testing-library/jest-dom";

describe("open main page",()=>{
    it("open main page",()=>{
        let history=createMemoryHistory({
            initialEntries:['/'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getByText}=render(application)

expect(getByText(/Welcome to Example store!/i).textContent).toEqual("Welcome to Example store!")
    })
})



describe("open catalog page",()=>{
    it("open catalog page",()=>{
        let history=createMemoryHistory({
            initialEntries:['/catalog'],initialIndex:0
        })

        const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getByRole}=render(application)

expect(getByRole('heading',{name:/catalog/i}).textContent).toEqual("Catalog")
        })
})

describe("open catalog page",()=>{
    it("open catalog page",()=>{
        let history=createMemoryHistory({
            initialEntries:['/delivery'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getByRole}=render(application)

expect(getByRole('heading',{name:/delivery/i}).textContent).toEqual("Delivery")
    })
})

describe("open catalog page",()=>{
    it("open catalog page",()=>{
        let history=createMemoryHistory({
            initialEntries:['/contacts'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getByRole}=render(application)

expect(getByRole('heading',{name:/contacts/i}).textContent).toEqual("Contacts")
    })
})

describe("open cart page",()=>{
    it("open cart page",()=>{
        let history=createMemoryHistory({
            initialEntries:['/cart'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getByRole}=render(application)

expect(getByRole('heading',{name:/Shopping cart/i}).textContent).toEqual("Shopping cart")
    })

    it("exmpty cart page should have link",()=>{
        let history=createMemoryHistory({
            initialEntries:['/cart'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getAllByRole}=render(application)

expect(getAllByRole('link').map((el)=>el.textContent)).toContain("catalog")
    })

    it("exmpty cart page should have link",()=>{
        let history=createMemoryHistory({
            initialEntries:['/cart'],initialIndex:0
        })

const basename = '/hw/store';


        const api = new ExampleApi(basename);
        const cart = new CartApi();
        cart.setState({0:{count:2,name:"somethingIntresting",price:123456}})
        const store = initStore(api, cart);
        
        const application = (
            <Router history={history}>
                <Provider store={store}>
                    <Application />
                </Provider>
            </Router>
        );

const {getAllByRole}=render(application)
expect(getAllByRole('link').map((el)=>el.textContent)).toContain("Cart (1)")

    })
})
