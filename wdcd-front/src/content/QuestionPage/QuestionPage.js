import React from 'react';
import { Button, Column, Grid, Row, TextInput,
    DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell} from 'carbon-components-react';
import { Add16, Search16 } from '@carbon/icons-react';

const rows = [
    {
        id: "00001",
        goodQuestion: "15",
        status: "해결됨",
        category: "JavaScript",
        name: "React 설치 시 yarn 속도 저하 문제",
        date: "2021-12-17 오후 5시 32분"
    }
];

const headers = [
    {
        key: "goodQuestion",
        header: "추천 수"
    },
    {
        key: "status",
        header: "해결 여부"
    },
    {
        key: "category",
        header: "분류"
    },
    {
        key: "name",
        header: "제목"
    },
    {
        key: "date",
        header: "일시"
    },
];

const QuestionPage = ()  => {
    return (
        <div>
            <h2>질문답변</h2>
            <div  style={{ margin: "2rem"}}>
            <DataTable rows={rows} headers={headers}>
                {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
                <Table {...getTableProps()}>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableHeader {...getHeaderProps({ header })}>
                                    {header.header}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow {...getRowProps({ row })}>
                                {row.cells.map((cell) => (
                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                )}
            </DataTable>
            </div>
            <Grid fullWidth>
                <Row>
                    <Column>
                        <Button renderIcon={Add16}>질문 등록하기</Button>
                    </Column>
                    <Column style={{ textAlign: "end"}}>
                        <div style={{ display: "inline-block", width: "80%", marginRight: "0.5rem"}}>
                            <TextInput
                                placeholder="검색어를 입력하세요..."
                                light
                                inline />                            
                        </div>
                        <Button kind="tertiary" renderIcon={Search16} iconDescription='검색' hasIconOnly/>
                    </Column>
                </Row>
            </Grid>
        </div>
    );
};

export default QuestionPage;