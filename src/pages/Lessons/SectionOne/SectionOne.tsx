import { Button, Box } from "@mui/material"

const MySpecialBox = (props: any) => {
  return (
    <Box>
      Label: {props.label}
      {props.children}
    </Box>
  )
  
}

export default function Section1Lessons() {
  return (
    <div>
      {/* <Button
        variant="contained"
        onClick={() => console.log("Clicked")}
        disableElevation
        component="h1"
        sx={{ bgcolor: 'green' }}>
          My Button
        </Button> */}
        <MySpecialBox label="Custom Element Example">
          <Button variant="contained">My Box</Button>
        </MySpecialBox>
    </div>
  )
}
