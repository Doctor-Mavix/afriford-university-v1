import Vue from 'vue'
import Router from 'vue-router'

// public 
import Home from '@/views/public/Home'

import SchoolPresentation from '@/views/public/SchoolPresentation'

import FacutiesPrograms from '@/views/public/FacutiesPrograms'

import FeesFunding from '@/views/public/FeesFunding'

import Scholarship from '@/views/public/Scholarship'

import OnlineProgram from '@/views/public/OnlineProgram'

import Admission from '@/views/public/Admission'

import AdmissionForm from '@/views/public/AdmissionForm'


import Contact from '@/views/public/Contact'


// import viewProduct from '@/views/ViewProduct'

// student
import StudentHome from '@/views/student/Home'

import StudentProgramme from '@/views/student/Programme'

import StudentResultat from '@/views/student/Resultat'


// teacher

// admin
import Admin from '@/views/admin/App'

import AdminLogin from '@/views/admin/Login'


import AdminHome from '@/views/admin/Home'

import AdminProfil from '@/views/admin/Profil'

import AdminDepartment from '@/views/admin/Department'

import AdminFaculty from '@/views/admin/Faculty'

import AdminContactList from '@/views/admin/ContactList'

// import AdminContact from '@/views/admin/Contact'

import AdminSetting from '@/views/admin/Setting'


import AdminAdmission from '@/views/admin/Admission'

import AdminShowAdmission from '@/views/admin/ShowAdmission'



Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/school-presentation',
            name: 'SchoolPresentation',
            component: SchoolPresentation
        },
        {
            path: '/faculties-programs',
            name: 'FacutiesPrograms',
            component: FacutiesPrograms
        },
        {
            path: '/fees-funding',
            name: 'FeesFunding',
            component: FeesFunding
        },
        {
            path: '/scholarship',
            name: 'Scholarship',
            component: Scholarship
        },
        {
            path: '/online-program',
            name: 'OnlineProgram',
            component: OnlineProgram
        },
        {
            path: '/admission',
            name: 'Admission',
            component: Admission
        },
        {
            path: '/admission-form',
            name: 'AdmissionForm',
            component: AdmissionForm
        },
        
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        // student rout
        {
            path: '/student',
            name: 'StudentHome',
            component: StudentHome
        },
        {
            path: '/student/programme',
            name: 'StudentProgramme',
            component: StudentProgramme
        },
        
        {
            path: '/student/resultat',
            name: 'StudentResultat',
            component: StudentResultat
        },
        {
            path: '/admin/login',
            name: 'AdminLogin',
            component: AdminLogin,
            beforeEnter(to,from,next){
                let token = localStorage.getItem('token')

                if(!token){
                    next()
                }
                else{

                    next('/admin/home')
                }


            }
        },
         // admin root
         {
            path: '/admin',
            name: 'Admin',
            component: Admin,
            redirect:'admin/home',
            beforeEnter(to,from,next){
                let token = localStorage.getItem('token')

                if(token){
                    next()
                }
                else{

                    next('/admin/login')
                }


            },
            children:[
                
                
                {
                    path: 'home',
                    name: 'AdminHome',
                    component: AdminHome
                },
                {
                    path: 'profil',
                    name: 'AdminProfil',
                    component: AdminProfil
                },
                {
                    path: 'department',
                    name: 'AdminDepartment',
                    component: AdminDepartment
                },
                {
                    path: 'faculty',
                    name: 'AdminFaculty',
                    component: AdminFaculty
                },
                // {
                //     path: 'contact/:id',
                //     name: 'AdminContact',
                //     component: AdminContact
                // },
                {
                    path: 'contact',
                    name: 'AdminContactList',
                    component: AdminContactList
                },
                
                {
                    path: 'setting',
                    name: 'AdminSetting',
                    component: AdminSetting
                },
                {
                    path: 'admission-applications',
                    name: 'AdminAdmission',
                    component: AdminAdmission
                },
                {
                    path: 'admission-applications/:id',
                    name: 'AdminShowAdmission',
                    component: AdminShowAdmission
                },

            ]
         }
         ,

         
        
       






        // {
        //     path: '/view-product/:id(\\d+)',
        //     name: 'viewProduct',
        //     component: viewProduct
        // },
       
        {
            path:'*',
            redirect:'/'
        }

    ]
})