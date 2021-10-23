import {createMemoryHistory} from "history"
import {ExampleApi,CartApi} from "../../src/client/api"
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {render} from "@testing-library/react"
import { Application } from '../../src/client/Application';
import { initStore } from '../../src/client/store';

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

expect(getByText(/welcom to exemple store!/i).textContent).toEqual("Welcome t oExemple store")
    })
})

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

expect(getByText(/welcom to exemple store!/i).textContent).toEqual("Welcome t oExemple store")
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

expect(getByRole('heading',{name:/catalog!/i}).textContent).toEqual("Catalog")
        
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

expect(getByRole('heading',{name:/delivery!/i}).textContent).toEqual("Delivery")
    })
})

expect(getByRole('heading',{name:/catalog!/i}).textContent).toEqual("Catalog")
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

expect(getByRole('heading',{name:/contacts!/i}).textContent).toEqual("Contacts")
    })
})