import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Tooltip,{tooltipClasses} from '@mui/material/Tooltip';
import EmailIcon from '@mui/icons-material/Email';
import { styled } from '@mui/material/styles';
import Fade from '@mui/material/Fade';


const IconTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      maxWidth: 200,
      fontSize: 13,
    },
});

const Footer = () => {
  return (
    <>
        <div className="footer w-100 h-28 mb-0 text-white">
            <div className="footer_content w-100 h-100 place-content-around flex items-center">
                <IconTooltip title='Image by pch.vector on Freepik' arrow placement='top' TransitionComponent={Fade}
                        TransitionProps={{ timeout: 600 }} >
                    <IconButton aria-label='attribuition' size='large' style={{color: 'white' }} href='https://www.freepik.com/popular-vectors' target='_blank'>
                            <WorkspacesIcon fontSize='large'/>
                    </IconButton>
                </IconTooltip>

                <h4>Project By Shauvik Paul &copy;</h4>

                <div className="icons flex place-content-around w-40">
                    <IconButton aria-label='github' size='large' style={{color: 'white' }} href='https://github.com/paulShauvik99' target='_blank'>
                        <GitHubIcon fontSize='large'/>
                    </IconButton>
                    <IconButton aria-label='linkedIn' size='large' style={{color: 'white' }} href='https://www.linkedin.com/in/shauvik-paul-02b905160/' target='_blank'>
                        <LinkedInIcon fontSize='large' />
                    </IconButton>
                    <IconButton aria-label='email' size='large' style={{color: 'white' }} href='mailto:paul99shauvik108@gmail.com' target='_blank'>
                        <EmailIcon fontSize='large' />
                    </IconButton>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer