import React from 'react';
import Breadcrumb from 'Common/BreadCrumb';
import { Card, Col, Row } from 'react-bootstrap';
import SimpleBar from 'simplebar-react';

const DefaultAuto = () => {
    document.title=" Scrollbar | Toner eCommerce + React Admin Template";

    return (
        <React.Fragment>
            <div className="page">
                <Breadcrumb breadcrumb="Advance UI" breadcrumbItem="Scrollbar" />
                <Row>
                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Default Scroll</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>SimpleBar</code> attribute and add <code>max-height: **px</code> to set default scrollbar.</p>

                                <div className="mx-n3">
                                    <SimpleBar style={{ maxHeight: "220px" }} className="px-3">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                        <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                        <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                        <p>Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                    </SimpleBar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xl={6}>
                        <Card>
                            <Card.Header>
                                <h4 className="card-title mb-0">Auto Hide False</h4>
                            </Card.Header>

                            <Card.Body>
                                <p className="text-muted">Use <code>autoHide={false}</code> attribute and add <code>max-height: **px</code> to show simplebar as default.</p>

                                <div className="mx-n3">
                                    <SimpleBar autoHide={false} style={{ maxHeight: "220px" }} className="px-3">
                                        <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing</p>
                                        <p>To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.</p>
                                        <p>The languages only differ in their grammar, their pronunciation and their most common words. Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                        <p className="mb-0">Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.</p>
                                    </SimpleBar>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}

export default DefaultAuto;