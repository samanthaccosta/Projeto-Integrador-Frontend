import { useState, useEffect } from 'react'
import { Box, Card,CardContent,Typography, Grid } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState} from '../../../store/user/UserReducer';


function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" className="fundo-temas">
        
        <Grid display="flex" item xs={12} flexDirection="row">
          <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" width="100%">
            {
              temas.map(tema => (
                <Box m={7} width="40%">
                  <Card>
                    <CardContent>
                      <Typography variant="h4" component="h2" className="margem-tema">
                        {tema.nome}
                      </Typography>
                      <Typography variant="h6" component="h2">
                        {tema.descricao}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))
            }
          </Box>
        </Grid>
      </Grid>
    </>
  );
}


export default ListaTema;