import React from 'react';
import { Button, Grid, Row, Column, Form,Select, SelectItem, SelectItemGroup, TextInput } from 'carbon-components-react';
import { Editor } from '@toast-ui/react-editor';

import '@toast-ui/editor/dist/toastui-editor.css';

const EditArticle = ()  => {
    return (
        <div>
            <Form>
                <div style={{marginBottom: '2rem'}}>
                    <div style={{display: "inline-block"}}>
                        <Select
                            defaultValue="placeholder-item"
                            id="categorySelector"
                            labelText="분류"
                            light
                            inline
                        >
                            <SelectItem
                                text="선택하세요..."
                                value="placeholder-item"
                            />
                            <SelectItemGroup
                                label="분류">
                                <SelectItem
                                    text="공지사항"
                                    value="notice"
                                />
                                <SelectItem
                                    text="질문답변"
                                    value="qna"
                                />
                                <SelectItem
                                    text="지식공유"
                                    valyue="knowledge"
                                />
                            </SelectItemGroup>
                        </Select>
                    </div>
                    <div style={{display: "inline-block"}}>
                        <Select
                            defaultValue="placeholder-item"
                            id="categorySelector"
                            labelText="프로그래밍 언어"
                            light
                            inline
                        >
                            <SelectItem
                                disabled
                                hidden
                                text="선택하세요..."
                                value="placeholder-item"
                            />
                            <SelectItemGroup
                                label="분류">
                                <SelectItem
                                    text="Java"
                                    value="java"
                                />
                                <SelectItem
                                    text="C / C++ / C#"
                                    value="cpp"
                                />
                                <SelectItem
                                    text="HTML"
                                    value="html"
                                />
                                <SelectItem
                                    text="CSS"
                                    value="css"
                                />
                                <SelectItem
                                    text="JavaScript / TypeScript"
                                    value="js"
                                />
                            </SelectItemGroup>
                        </Select>
                    </div>
                    <TextInput
                        id="contentTitle"
                        labelText="제목"
                        placeholder='제목을 입력하세요.'
                    />
                </div>
                <Editor
                    previewStyle="tab"
                    height="600px"
                    initialEditType="wysiwyg"
                    useCommandShortcut={true}
                />
                <Grid fullWidth>
                    <Row style={{ marginTop: "2rem" }}>
                        <Column >
                            <Button kind="danger--tertiary">돌아가기</Button>        
                        </Column>
                        <Column sm={{ offset: '1' }} style={{ textAlign: "end"}}>
                            <Button kind="tertiary">임시저장</Button>
                            &nbsp;
                            <Button kind="primary">게시하기</Button>
                        </Column>
                    </Row>
                </Grid>
            </Form>
        </div>
    );
};

export default EditArticle;