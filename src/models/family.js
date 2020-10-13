module.exports ={
    family_graph :{},
    //{p1:{r1:[],r2:[]}}
    add :function(connection){
        if(connection.op2 in this.family_graph){
            connection.relation in this.family_graph[connection.op2]? 
                    this.family_graph[connection.op2][connection.relation].push(connection.op1):
                    this.family_graph[connection.op2][connection.relation] = [connection.op1];
        }else{
            this.family_graph[connection.op2] = {[connection.relation]:[connection.op1]};
        }
        return;
    }
}