import App from './App'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { mount } from 'cypress-vue-unit-test'

describe('Router example', () => {
    beforeEach(() => {
        cy.server() 
        cy.route('GET', '/mypuppy-api*', 'fixture:puppies.json').as('puppies')
        cy.route(() => {
            // ...do some custom logic here..
          
            // and return an appropriate routing object here
            return {
              method: 'POST',
              url: '/mypuppy-api*',
              response: '@puppies'
            }
        })
        mount(
            {
                router,
                store,
                render(h) { return h(App) }
            },
            { extensions: { plugins: [ VueRouter, Vuex ] } }
        )
    })
    it('lets me go between the About and Home page', () => {
        // cy.get('[data-testid=puppies-link')
        //   .click()

        // cy.get('[data-testid=hello-world-homepage').should('exist')
    })
})