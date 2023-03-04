import {React,useEffect }from 'react';
import ProjectCard from './ProjectCard/ProjectCard'
import './Projects.scss';
import Loader from '../Loader/Loader';
import $ from 'jquery';
export default function Projects() {
  useEffect(() => {
    // This code will be executed after the component has mounted and the window has finished loading
    $('.wrapper-loader').fadeOut('slow');
  }, []);
    const Projects=[1,2,3,4,5,6]
  return <>
    <div className='projects-page'>
        <div> <h1 className='heading'>Projects</h1></div>
        <div className='projects'>
            {Projects.map(pro=> (
                <ProjectCard key={pro} title={pro} />
            ))}
        </div>
    </div>
    <div className="wrapper-loader"> <Loader /></div>
    </>
}
